import { ImageCrad } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallPapers, Wallpaper } from "@/hooks/useWallpapers";
import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { v4 as uuidv4 } from "uuid";

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
        {wallpapers.map((w: Wallpaper) => (
          <ImageCrad key={uuidv4()} wallpaper={w} />
        ))}
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
