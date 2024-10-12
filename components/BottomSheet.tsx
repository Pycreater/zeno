import React, { useCallback, useRef } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  useColorScheme,
  Text,
  StatusBar,
  SafeAreaView,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpapers";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

const DownloadPicture = ({
  onClose,
  wallpaper,
}: {
  onClose: () => void;
  wallpaper: Wallpaper;
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const theme = useColorScheme() ?? "light";

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheet
      onClose={onClose}
      snapPoints={["95%"]}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      handleIndicatorStyle={styles.handleIndicator}
      style={styles.bottomSheet}
      backgroundStyle={styles.bottomSheetBackground}
    >
      <BottomSheetView style={styles.contentContainer}>
        <StatusBar barStyle="light-content" />
        <Image
          style={styles.image}
          source={{
            uri: wallpaper.url,
          }}
        />
        <View style={styles.topBar}>
          <TouchableOpacity onPress={onClose} style={styles.iconWrapper}>
            <Ionicons name="close" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <View style={styles.topBarInner}>
            <TouchableOpacity style={styles.iconWrapper}>
              <Ionicons name="heart" size={24} color="#FFFFFF" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconWrapper}>
              <Ionicons name="share-social" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        <SafeAreaView style={styles.safeArea}>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>
              {wallpaper.name || "Unnamed Image"}
            </Text>
            <Text style={styles.description}>
              {`Uploaded on: ${new Date(
                wallpaper.createdAt
              ).toLocaleDateString()}`}
            </Text>
            <Text style={styles.description}>{`${wallpaper.likes} Likes`}</Text>
          </View>

          <TouchableOpacity
            style={styles.downloadButton}
            onPress={() => console.log("Download pressed")}
          >
            <Ionicons
              name="download"
              size={24}
              color="white"
              style={styles.downloadIcon}
            />
            <Text style={styles.downloadButtonText}>Download Wallpaper</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: "hidden",
  },
  bottomSheetBackground: {
    backgroundColor: "#121212",
  },
  handleIndicator: {
    backgroundColor: "#FFFFFF",
    width: 40,
    height: 4,
    borderRadius: 2,
    marginTop: 8,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#121212",
  },
  image: {
    height: "65%",
    resizeMode: "cover",
  },
  topBar: {
    position: "absolute",
    top: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
    zIndex: 10,
  },
  topBarInner: {
    flexDirection: "row",
  },
  iconWrapper: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 8,
    borderRadius: 20,
    marginLeft: 8,
  },
  safeArea: {
    flex: 1,
    justifyContent: "space-between",
  },
  infoContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#BBBBBB",
    marginBottom: 4,
  },
  downloadButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 24,
  },
  downloadIcon: {
    marginRight: 8,
  },
  downloadButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DownloadPicture;
