import { Link } from "expo-router";
import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function account() {
  return (
    <SafeAreaView>
      <Text>explore</Text>
      <Link href={"/accountinfo"}>Account Info</Link>
    </SafeAreaView>
  );
}
