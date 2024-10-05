import DownloadPicture from "@/components/BottomSheet";
import { useState } from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function explore() {
  const [pictureOpen, setPictureOpened] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>account</Text>
        <Button
          title="Open Bottom sheet"
          onPress={() => {
            setPictureOpened(true);
          }}
        ></Button>
        {pictureOpen && (
          <DownloadPicture onClose={() => setPictureOpened(false)} />
        )}
      </View>
    </SafeAreaView>
  );
}
