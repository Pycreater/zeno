import { View, StyleSheet } from "react-native";
import { ImageCard } from "./ImageCard";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import DownloadPicture from "./BottomSheet";

export function SplitView({ wallpapers }: { wallpapers: Wallpaper[] }) {
  //   const wallpapers = useWallpapers();
  const [selectedWallapaper, setSelectedWallpaper] = useState<null | Wallpaper>(
    null
  );

  return (
    <View style={styles.container}>
      {wallpapers.map((w: Wallpaper) => (
        <View style={styles.imageWrapper} key={w.url}>
          <ImageCard
            wallpaper={w}
            onPress={() => {
              //   console.log("seleted wallpaper - " + w);
              setSelectedWallpaper(w);
            }}
          />
        </View>
      ))}
      {selectedWallapaper && (
        <DownloadPicture
          wallpaper={selectedWallapaper}
          onClose={() => setSelectedWallpaper(null)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Two columns layout
    flexWrap: "wrap", // Wrap rows if there's not enough space
    justifyContent: "space-between", // Spacing between items
    padding: 10, // Add padding around the container
  },
  imageWrapper: {
    width: "48%", // Each card takes about half of the width (adjust to fit the design)
    marginBottom: 10, // Space between rows
  },
});
