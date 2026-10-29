import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { worldBySlug } from "@/data/worlds";
import { colors, spacing } from "@/theme";

export default function WorldScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const router = useRouter();
  const world = worldBySlug(slug ?? "");
  if (!world) return <SafeAreaView style={styles.safe}><Pressable onPress={() => router.replace("/")} style={styles.back}><Text style={styles.backText}>‹  ALL WORLDS</Text></Pressable><Text style={styles.title}>World not found</Text></SafeAreaView>;
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.content}>
        <Pressable accessibilityRole="button" accessibilityLabel="Back to all worlds" onPress={() => router.replace("/")} style={styles.back}><Text style={[styles.backText, { color: world.accent }]}>‹  ALL WORLDS</Text></Pressable>
        <View style={[styles.hero, { borderColor: world.accent + "66" }]}>
          <View style={[styles.orbit, { borderColor: world.accent + "66" }]}><View style={[styles.core, { backgroundColor: world.accent, shadowColor: world.accent }]}><Text style={styles.glyph}>{world.glyph}</Text></View><View style={[styles.moon, { backgroundColor: world.accent }]} /></View>
          <Text style={[styles.eyebrow, { color: world.accent }]}>{world.eyebrow}</Text>
          <Text style={styles.title}>{world.name}</Text>
          <Text style={styles.description}>{world.description}</Text>
        </View>
        <Text style={styles.sectionLabel}>WHAT YOU’LL FIND HERE</Text>
        <Text style={styles.promise}>{world.promise}</Text>
        {world.modules.map((module, index) => <View key={module} style={styles.module}><View style={[styles.moduleDot, { backgroundColor: world.accent }]} /><Text style={styles.moduleText}>{module}</Text><Text style={styles.moduleNumber}>{String(index + 1).padStart(2, "0")}</Text></View>)}
        <View style={styles.notice}><Text style={styles.noticeTitle}>DATA CONNECTION PENDING</Text><Text style={styles.noticeText}>This native foundation is ready for live Y.E.S. data. No odds, injuries, scores, or player projections are being shown until a verified backend feed is connected.</Text></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xxl },
  back: { alignSelf: "flex-start", paddingVertical: 12, paddingHorizontal: 3 },
  backText: { color: colors.cyan, fontSize: 11, fontWeight: "900", letterSpacing: 1.3 },
  hero: { minHeight: 268, justifyContent: "flex-end", padding: spacing.lg, borderWidth: 1, borderRadius: 26, backgroundColor: colors.surface, overflow: "hidden", marginTop: spacing.md },
  orbit: { position: "absolute", top: 27, right: 25, width: 126, height: 126, borderRadius: 64, borderWidth: 1, alignItems: "center", justifyContent: "center" },
  core: { width: 72, height: 72, borderRadius: 40, alignItems: "center", justifyContent: "center", shadowOpacity: 0.85, shadowRadius: 25, elevation: 12 },
  glyph: { color: colors.background, fontWeight: "900", fontSize: 34 },
  moon: { position: "absolute", width: 13, height: 13, borderRadius: 7, top: 5, right: 12 },
  eyebrow: { fontSize: 9, letterSpacing: 2, fontWeight: "900" },
  title: { color: colors.text, fontWeight: "900", fontSize: 32, marginTop: 8 },
  description: { color: colors.muted, lineHeight: 20, fontSize: 14, marginTop: 6, maxWidth: 270 },
  sectionLabel: { color: colors.dim, fontSize: 10, letterSpacing: 1.8, fontWeight: "900", marginTop: spacing.xl },
  promise: { color: colors.text, fontSize: 20, fontWeight: "800", lineHeight: 27, marginTop: 8, marginBottom: spacing.md },
  module: { minHeight: 56, flexDirection: "row", alignItems: "center", gap: 12, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: 16, paddingHorizontal: 15, marginBottom: 9 },
  moduleDot: { width: 8, height: 8, borderRadius: 5 },
  moduleText: { flex: 1, color: colors.text, fontSize: 13, fontWeight: "700" },
  moduleNumber: { color: colors.dim, fontSize: 10, fontWeight: "800" },
  notice: { backgroundColor: "#0E1B2C", borderWidth: 1, borderColor: "#25435C", borderRadius: 18, padding: spacing.md, marginTop: spacing.lg },
  noticeTitle: { color: colors.cyan, fontSize: 10, letterSpacing: 1.2, fontWeight: "900" },
  noticeText: { color: colors.muted, fontSize: 12, lineHeight: 18, marginTop: 8 }
});
