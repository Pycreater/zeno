import { FontAwesome } from "@expo/vector-icons";
import { Link, Slot, Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}>
      <Tabs.Screen
        name="foryou"
        options={{
          title: "For You",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />

      {/* "th": Represents a grid of items, which is often associated with image galleries.
          "clone": Looks like stacked images, which could convey browsing or exploring wallpapers.
          "eye": Often represents viewing, which could imply exploring or viewing wallpapers.
          "search-plus": Indicates zooming in on content, which can be associated with detailed exploration. */}

      <Tabs.Screen
        name="index"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="clone" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
