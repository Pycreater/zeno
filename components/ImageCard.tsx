import { Wallpaper } from "@/hooks/useWallpapers";
import {
  View,
  StyleSheet,
  Image,
  useColorScheme,
  Pressable,
} from "react-native";
import { ThemedText } from "./ThemedText";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

export function ImageCard({
  wallpaper,
  onPress,
}: {
  wallpaper: Wallpaper;
  onPress: () => void;
}) {
  const theme = useColorScheme() ?? "light";

  return (
    <Pressable onPress={onPress} style={styles.cardContainer}>
      <Image source={{ uri: wallpaper.url }} style={styles.image} />
      <View style={styles.labelContainer}>
        <View style={styles.iconWithText}>
          <Ionicons
            name={"heart"}
            size={22}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          />
          <ThemedText style={styles.label}>{wallpaper.likes}</ThemedText>
        </View>
        <Ionicons
          name={"share"}
          size={22}
          color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          style={styles.iconRight}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 12,
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  image: {
    height: 260,
    width: "100%",
    borderRadius: 16,
  },
  labelContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  iconWithText: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
  iconRight: {
    marginLeft: 16,
  },
});
