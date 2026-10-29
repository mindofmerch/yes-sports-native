import { Pressable, StyleSheet, Text, View } from "react-native";
import { World } from "@/data/worlds";
import { colors, spacing } from "@/theme";

type Props = { world: World; index: number; onPress: () => void };

export function WorldCard({ world, index, onPress }: Props) {
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={`Enter ${world.name}. ${world.description}`} onPress={onPress} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={[styles.orbit, { borderColor: world.accent + "55" }]}>
        <View style={[styles.core, { backgroundColor: world.accent, shadowColor: world.accent }]}><Text style={styles.glyph}>{world.glyph}</Text></View>
        <View style={[styles.moon, { backgroundColor: world.accent }]} />
      </View>
      <View style={styles.copy}>
        <View style={styles.topline}><Text style={[styles.eyebrow, { color: world.accent }]}>{world.eyebrow}</Text><Text style={styles.index}>{String(index + 1).padStart(2, "0")}</Text></View>
        <Text style={styles.title}>{world.name}</Text>
        <Text style={styles.description}>{world.description}</Text>
        <Text style={[styles.enter, { color: world.accent }]}>ENTER WORLD  ›</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { minHeight: 142, flexDirection: "row", alignItems: "center", gap: spacing.md, padding: spacing.md, marginBottom: spacing.md, borderRadius: 22, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, overflow: "hidden" },
  pressed: { opacity: 0.78, transform: [{ scale: 0.985 }] },
  orbit: { width: 82, height: 82, borderRadius: 41, borderWidth: 1, alignItems: "center", justifyContent: "center" },
  core: { width: 49, height: 49, borderRadius: 25, alignItems: "center", justifyContent: "center", shadowOpacity: 0.75, shadowRadius: 18, elevation: 8 },
  glyph: { color: colors.background, fontSize: 24, fontWeight: "800" },
  moon: { position: "absolute", width: 8, height: 8, borderRadius: 5, top: 9, right: 11 },
  copy: { flex: 1 },
  topline: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  eyebrow: { fontSize: 9, fontWeight: "800", letterSpacing: 1.5 },
  index: { color: colors.dim, fontSize: 10, fontWeight: "700" },
  title: { color: colors.text, fontSize: 20, fontWeight: "800", marginTop: 4 },
  description: { color: colors.muted, fontSize: 12, lineHeight: 17, marginTop: 3 },
  enter: { fontSize: 10, fontWeight: "800", letterSpacing: 1.1, marginTop: 11 }
});
