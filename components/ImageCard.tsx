import { Wallpaper } from "@/hooks/useWallpapers";
import { Image, View, StyleSheet } from "react-native";

export function ImageCrad({ wallpaper }: { wallpaper: Wallpaper }) {
  return (
    <View>
      <Image source={{ uri: wallpaper.url }} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 300,
  },
});
