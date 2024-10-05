import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallPapers, Wallpaper } from "@/hooks/useWallpapers";
import { Image, Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function explore() {
  const wallpapers = useWallPapers();
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
            <ImageCard
              key={w.url}
              wallpaper={w}
              onPress={() => {
                console.log("");
              }}
            />
          ))}
        </View>
      </ParallaxScrollView>
    </SafeAreaView>
  );

  // return (
  //   <SafeAreaView style={{ flex: 1 }}>
  //     <View style={{ flex: 1 }}>
  //       <Text>Explore</Text>
  //       <Button
  //         title="Open Bottom sheet"
  //         onPress={() => {
  //           setPictureOpened(true);
  //         }}
  //       ></Button>
  //       {pictureOpen && (
  //         <DownloadPicture onClose={() => setPictureOpened(false)} />
  //       )}
  //     </View>
  //   </SafeAreaView>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
});
