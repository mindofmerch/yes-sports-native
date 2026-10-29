export type World = {
  slug: string; name: string; eyebrow: string; description: string; promise: string; accent: string; glyph: string; modules: string[];
};

export const worlds: World[] = [
  { slug: "vortex", name: "TD Vortex", eyebrow: "THE MAIN ARENA", description: "A living field of matchup and touchdown stories.", promise: "See every matchup as a connected player universe.", accent: "#38E7FF", glyph: "✳", modules: ["Matchup selector", "Player orbits", "TD opportunity signals"] },
  { slug: "red-zone", name: "Red Zone", eyebrow: "SCORING TERRITORY", description: "Follow the touches and targets that reach scoring range.", promise: "Explore red-zone usage by player, team, and week.", accent: "#FF7189", glyph: "◉", modules: ["Inside-the-20 usage", "Inside-the-10 focus", "Role and opportunity"] },
  { slug: "history-echo", name: "History Echo", eyebrow: "PATTERN TIMELINE", description: "Trace past game scripts, margins, and player outcomes.", promise: "Compare today’s matchup with verified historical games.", accent: "#B16CFF", glyph: "◎", modules: ["Game timeline", "Score and margin bands", "Comparable game archive"] },
  { slug: "td-zone", name: "TD Zone", eyebrow: "PLAYER DISCOVERY", description: "Explore touchdown scorers and player opportunity trends.", promise: "Find the players and usage paths behind each score.", accent: "#FFC95C", glyph: "✦", modules: ["Weekly scorers", "Top player rankings", "Opportunity trails"] },
  { slug: "ats-lab", name: "ATS Lab", eyebrow: "SPREAD TRACKER", description: "Inspect against-the-spread results with matchup context.", promise: "See the record, source line, and game context together.", accent: "#69E5B1", glyph: "↗", modules: ["ATS history", "Line movement context", "Team trend comparison"] },
  { slug: "gold-script", name: "Gold Script", eyebrow: "GAME BRIEFING", description: "Bring matchup evidence into a readable game story.", promise: "Turn sourced signals into a clear pregame briefing.", accent: "#FF9C70", glyph: "✧", modules: ["Game flow notes", "Strengths and counterpoints", "Source freshness"] }
];

export const worldBySlug = (slug: string) => worlds.find((world) => world.slug === slug);
