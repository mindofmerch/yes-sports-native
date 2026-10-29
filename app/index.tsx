import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WorldCard } from "@/components/WorldCard";
import { worlds } from "@/data/worlds";
import { colors, spacing } from "@/theme";

export default function WorldsHome() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View><Text style={styles.brand}>Y.E.S. <Text style={styles.brandAccent}>SPORTS</Text></Text><Text style={styles.tagline}>YOUR EDGE STARTS HERE</Text></View>
          <View style={styles.liveBadge}><View style={styles.dot} /><Text style={styles.badgeText}>WORLD HUB</Text></View>
        </View>
        <View style={styles.hero}>
          <View style={styles.heroGlow} />
          <Text style={styles.kicker}>CHOOSE YOUR WORLD</Text>
          <Text style={styles.heading}>The game has{"\n"}many angles.</Text>
          <Text style={styles.subheading}>Step straight into the view you want.</Text>
          <View style={styles.heroOrbitOuter}><View style={styles.heroOrbitInner}><View style={styles.heroSun}><Text style={styles.sunGlyph}>Y</Text></View><View style={styles.heroMoon} /></View></View>
        </View>
        <View style={styles.sectionHeader}><View><Text style={styles.sectionTitle}>YOUR WORLDS</Text><Text style={styles.sectionSub}>Every world has its own purpose</Text></View><Text style={styles.count}>06 WORLDS</Text></View>
        {worlds.map((world, index) => <WorldCard key={world.slug} world={world} index={index} onPress={() => router.push({ pathname: "/world/[slug]", params: { slug: world.slug } })} />)}
        <View style={styles.footer}><Text style={styles.footerText}>Y.E.S. SPORTS  ·  YOUR EDGE SPORTS</Text></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.md, paddingBottom: spacing.xxl },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: spacing.sm, paddingBottom: spacing.lg },
  brand: { color: colors.text, fontSize: 19, fontWeight: "900", letterSpacing: 1.2 },
  brandAccent: { color: colors.cyan },
  tagline: { color: colors.dim, fontSize: 8, letterSpacing: 2, fontWeight: "800", marginTop: 4 },
  liveBadge: { flexDirection: "row", alignItems: "center", gap: 7, borderColor: colors.border, borderWidth: 1, borderRadius: 20, paddingHorizontal: 11, paddingVertical: 8, backgroundColor: "#0D1427" },
  dot: { width: 6, height: 6, borderRadius: 4, backgroundColor: colors.violet },
  badgeText: { color: colors.muted, fontSize: 9, letterSpacing: 1.1, fontWeight: "800" },
  hero: { minHeight: 226, borderRadius: 26, backgroundColor: "#101833", borderColor: "#253557", borderWidth: 1, padding: spacing.lg, marginBottom: spacing.xl, overflow: "hidden", justifyContent: "center" },
  heroGlow: { position: "absolute", right: -30, top: -45, width: 200, height: 200, borderRadius: 100, backgroundColor: "#14344D", opacity: 0.52 },
  kicker: { color: colors.cyan, fontSize: 9, fontWeight: "900", letterSpacing: 2.3 },
  heading: { color: colors.text, fontSize: 33, lineHeight: 38, fontWeight: "900", marginTop: 12, letterSpacing: -0.7 },
  subheading: { color: colors.muted, fontSize: 13, marginTop: 9 },
  heroOrbitOuter: { position: "absolute", right: -22, top: 35, width: 175, height: 175, borderRadius: 88, borderWidth: 1, borderColor: "#5B8CFF55", alignItems: "center", justifyContent: "center", transform: [{ rotate: "-24deg" }] },
  heroOrbitInner: { width: 130, height: 130, borderRadius: 65, borderWidth: 1, borderColor: "#38E7FF88", alignItems: "center", justifyContent: "center" },
  heroSun: { width: 68, height: 68, borderRadius: 36, backgroundColor: "#3D8EBA", alignItems: "center", justifyContent: "center", shadowColor: colors.cyan, shadowOpacity: 0.9, shadowRadius: 27, elevation: 12 },
  sunGlyph: { color: colors.text, fontSize: 30, fontWeight: "900" },
  heroMoon: { position: "absolute", width: 17, height: 17, borderRadius: 10, backgroundColor: colors.violet, right: 6, top: 14, shadowColor: colors.violet, shadowOpacity: 0.9, shadowRadius: 10 },
  sectionHeader: { flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", marginBottom: spacing.md },
  sectionTitle: { color: colors.text, fontSize: 13, fontWeight: "900", letterSpacing: 1.5 },
  sectionSub: { color: colors.dim, fontSize: 11, marginTop: 4 },
  count: { color: colors.dim, fontSize: 9, fontWeight: "800", letterSpacing: 1 },
  footer: { alignItems: "center", paddingTop: spacing.lg },
  footerText: { color: colors.dim, fontSize: 9, letterSpacing: 1.4, fontWeight: "700" }
});
