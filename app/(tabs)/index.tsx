import DownloadPicture from "@/components/BottomSheet";
import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useCarousel } from "@/hooks/useCarousel";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { Image, Text, StyleSheet, View, Dimensions } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient

const TOPBAR_HEIGHT = 250;
const { width } = Dimensions.get("window"); // Define the width of the screen

export default function Explore() {
  const wallpapers = useWallpapers();
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(
    null
  );
  const carouselItems = useCarousel();
  const [yOffset, setScrollY] = useState(0);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            yOffset,
            [-TOPBAR_HEIGHT, 0, TOPBAR_HEIGHT],
            [1.5, 1, 1]
          ),
        },
      ],
    };
  });

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(yOffset, [0, 150], [1, 0]),
    };
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Animated.View
            style={[
              { height: Math.max(0, TOPBAR_HEIGHT - yOffset) },
              headerAnimatedStyle,
            ]}
          >
            <Carousel
              width={width}
              height={TOPBAR_HEIGHT}
              data={carouselItems}
              autoPlay
              autoPlayInterval={2500} // Set the auto-play interval to 2.5 seconds
              loop // Ensure the carousel loops after the last item
              onSnapToItem={(index) => console.log("current index:", index)}
              renderItem={({ index }) => (
                <>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={{ uri: carouselItems[index].image }}
                      style={{ height: TOPBAR_HEIGHT, width: "100%" }}
                      resizeMode="cover" // Ensure the image covers the container without distortion
                    />
                  </View>

                  <LinearGradient
                    colors={["transparent", "black"]}
                    style={{
                      flex: 1,
                      position: "absolute",
                      zIndex: 10,
                      height: TOPBAR_HEIGHT / 2,
                      width: "100%",
                      bottom: 0,
                    }}
                  >
                    <Animated.View style={textAnimatedStyle}>
                      <Text
                        style={{
                          color: "white",
                          paddingTop: TOPBAR_HEIGHT / 3,
                          textAlign: "center",
                          fontSize: 30,
                          fontWeight: "600",
                        }}
                      >
                        {carouselItems[index].title}
                      </Text>
                    </Animated.View>
                  </LinearGradient>
                </>
              )}
            />
          </Animated.View>
        }
        onScroll={(e) => setScrollY(e.nativeEvent.contentOffset.y)} // Capture scroll event to update yOffset
      >
        <View style={styles.container}>
          {wallpapers.map((w: Wallpaper) => (
            <View style={styles.imageWrapper} key={w.url}>
              <ImageCard
                wallpaper={w}
                onPress={() => {
                  console.log("selected wallpaper - " + w);
                  setSelectedWallpaper(w);
                }}
              />
            </View>
          ))}
        </View>
      </ParallaxScrollView>
      {selectedWallpaper && (
        <DownloadPicture
          wallpaper={selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
        />
      )}
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
