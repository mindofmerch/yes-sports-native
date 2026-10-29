const API_BASE_URL = (process.env.EXPO_PUBLIC_API_BASE_URL ?? 'https://cnqyxhazmctvboxaosut.supabase.co/functions/v1/yes-td-data').replace(/\/$/, '');

export type YesFeed = {
  ok?: boolean;
  error?: string;
  season?: number;
  week?: number;
  through_week?: number;
  latest_complete_week?: number;
  model_version?: string;
  freshness?: { observed_at?: string; published_at?: string; stale?: boolean };
  players?: unknown[];
  games?: unknown[];
  teams?: unknown[];
  completed_games?: unknown[];
  periods?: Record<string, unknown>;
};

export type WorldFeedResult = {
  status: 'ready' | 'stale' | 'unavailable' | 'not_published';
  data?: YesFeed;
  message?: string;
};

const actionByWorld: Record<string, string> = {
  vortex: 'discovery',
  'red-zone': 'tdzone',
  'td-zone': 'directory',
  'gold-script': 'goldscript',
};

async function requestFeed(action: string, signal: AbortSignal, params?: Record<string, string>) {
  const url = new URL(API_BASE_URL);
  url.searchParams.set('action', action);
  Object.entries(params ?? {}).forEach(([key, value]) => url.searchParams.set(key, value));
  const response = await fetch(url.toString(), { signal, headers: { Accept: 'application/json' } });
  const payload = (await response.json()) as YesFeed;
  if (!response.ok || payload.ok === false) throw new Error(payload.error ?? 'Data service request failed.');
  return payload;
}

export async function loadWorldFeed(slug: string): Promise<WorldFeedResult> {
  const action = actionByWorld[slug];
  if (!action && slug !== 'history-echo') {
    return { status: 'not_published', message: slug === 'ats-lab' ? 'The existing Y.E.S. service has no verified public ATS feed yet.' : 'A published feed for this world is not configured yet.' };
  }
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    let data: YesFeed;
    if (slug === 'history-echo') {
      const current = await requestFeed('current', controller.signal);
      const season = Number(current.season);
      const week = Number(current.latest_complete_week ?? current.through_week ?? current.week);
      if (!Number.isInteger(season) || !Number.isInteger(week) || week < 1 || week > 18) {
        return { status: 'not_published', message: 'The current published slate does not include a valid historical recap week.' };
      }
      data = await requestFeed('recap', controller.signal, { season: String(season), week: String(week) });
    } else {
      data = await requestFeed(action, controller.signal);
    }
    return { status: data.freshness?.stale ? 'stale' : 'ready', data };
  } catch {
    return { status: 'unavailable', message: 'The published Y.E.S. feed could not be reached. Try again shortly.' };
  } finally {
    clearTimeout(timeout);
  }
}

export function feedRecordCount(data: YesFeed) {
  return data.players?.length ?? data.games?.length ?? data.completed_games?.length ?? data.teams?.length ??
    (data.periods ? Object.keys(data.periods).length : undefined);
}
