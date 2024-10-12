import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { Image, Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Explore() {
  const wallpapers = useWallpapers();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            style={{ flex: 1 }}
            source={{
              uri: wallpapers[0]?.url ?? "",
            }}
          />
        }
      >
        <View style={styles.container}>
          {wallpapers.map((w: Wallpaper) => (
            <View style={styles.imageWrapper} key={w.url}>
              <ImageCard
                wallpaper={w}
                onPress={() => {
                  console.log("");
                }}
              />
            </View>
          ))}
        </View>
      </ParallaxScrollView>
    </SafeAreaView>
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
