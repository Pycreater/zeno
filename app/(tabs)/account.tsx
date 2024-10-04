import DownloadPicture from "@/components/BottomSheet";
import { useState } from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function account() {
  const [pictureOpen, setPictureOpened] = useState(false);

  return (
    <SafeAreaView>
      <Text>account</Text>
      <Button
        title="Open Bottom sheet"
        onPress={() => {
          setPictureOpened(true);
        }}
      ></Button>
      {pictureOpen && <DownloadPicture />}
    </SafeAreaView>
  );
}
