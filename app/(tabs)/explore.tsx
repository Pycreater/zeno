import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function explore() {
  return (
    <View>
      <Text>explore</Text>
      <Link href={"/accountinfo"}>Account Info</Link>
    </View>
  );
}
