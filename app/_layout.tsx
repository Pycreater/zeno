import { Link, Slot } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaView>
      <View style={{ height: "90%" }}>
        <Slot />
      </View>
      <Link href={"/account"}>
        <Text>Account</Text>
      </Link>

      <Link href={"/"}>
        <Text>For you</Text>
      </Link>

      <Link href={"/explore"}>
        <Text>Explore</Text>
      </Link>
    </SafeAreaView>
  );
}
