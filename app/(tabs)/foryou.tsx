import React from "react";
import { View, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SplitView } from "@/components/SplitView";
import { useWallpapers } from "@/hooks/useWallpapers";
import { ScrollView } from "react-native-gesture-handler";

const Tab = createMaterialTopTabNavigator();

//@ts-ignore
const WallpaperScreen = ({ type }) => {
  //@ts-ignore
  const wallpapers = useWallpapers(type);

  return (
    <View style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <SplitView wallpapers={wallpapers} />
      </ScrollView>
    </View>
  );
};

const LibraryScreen = () => <WallpaperScreen type="library" />;
const LikedScreen = () => <WallpaperScreen type="liked" />;
const SuggestedScreen = () => <WallpaperScreen type="suggested" />;

export default function ForYou() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.content}>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: styles.tabBar,
            tabBarIndicatorStyle: styles.tabBarIndicator,
            tabBarLabelStyle: styles.tabBarLabel,
          }}
        >
          <Tab.Screen name="Library" component={LibraryScreen} />
          <Tab.Screen name="Liked" component={LikedScreen} />
          <Tab.Screen name="Suggested" component={SuggestedScreen} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  screenContainer: {
    flex: 1, // Ensure the screen container takes full available space
  },
  scrollViewContent: {
    flexGrow: 1, // Make sure the content inside the ScrollView can expand vertically
    justifyContent: "flex-start", // Optional, depending on how you want the content aligned
    paddingBottom: 20, // Ensure there's some padding at the bottom for better UX
    height: "50%",
  },
  tabBar: {
    backgroundColor: "#ffffff",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  tabBarIndicator: {
    backgroundColor: "#007AFF",
    height: 3,
  },
  tabBarLabel: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
