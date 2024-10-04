import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function foryou() {
  return (
    <View>
      <Text>for you</Text>
      <Link href={"/library"}>
        <Text>Library</Text>
      </Link>
      <Link href={"/liked"}>
        <Text>liked</Text>
      </Link>
      <Link href={"/suggested"}>
        <Text>Suggested</Text>
      </Link>
    </View>
  );
}
