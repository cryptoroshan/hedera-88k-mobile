import React, { useState } from "react";
import { Dimensions, Platform, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Box, Center, HStack, Image, Stack, Text, VStack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

// Icons
import EditSvg from "../../../assets/icons/edit.svg";
import LeftSvg from "../../../assets/icons/left.svg";
import PlusSvg from "../../../assets/icons/plus.svg";
import PublicSvg from "../../../assets/icons/public.svg";
import PrivateSvg from "../../../assets/icons/private.svg";
import SearchSvg from "../../../assets/icons/search.svg";
import DeleteSvg from "../../../assets/icons/delete.svg";

// Constants
import Footer from "../../components/Footer";
import { COLOR } from "../../constants/Color";

const { width } = Dimensions.get("window");

const LibrarySettings = ({ navigation, route }) => {
  const { library } = route.params;

  const [isPrivate, setIsPrivate] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, width: "100%", backgroundColor: COLOR.black }}>
      <ScrollView flex={1}>
        {/* Header */}
        <HStack justifyContent="space-between" paddingX="30px" marginTop="18px">
          <TouchableOpacity onPress={() => navigation.navigate("LibraryExploreScreen", { library: library })} style={{ marginTop: 15 }}>
            {Platform.OS === 'web' ?
              <Image source={require("../../../assets/icons/left.svg")} width="13px" height="19px" alt="left" />
              : <LeftSvg width="13px" height="19px" />
            }
          </TouchableOpacity>
          <Text style={styles.pageTitle}>Explore</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SearchExploreScreen")} style={{ marginTop: 13 }}>
            {Platform.OS === 'web' ?
              <Image source={require("../../../assets/icons/search.svg")} width="24px" height="24px" alt="search" />
              : <SearchSvg width="24px" height="24px" />
            }
          </TouchableOpacity>
        </HStack>
        {/* Top Container */}
        <Center>
          <Box style={styles.cardContainer} marginTop="1/4">
            <Stack style={styles.cardImage}>
              <Image
                source={{ uri: library.image }}
                opacity={0.8}
                width="100%"
                height="100%"
                borderRadius="11px"
                alt={library.title}
              />
            </Stack>
          </Box>
          <Text style={styles.cardTitle}>{library.title}</Text>
          <Text style={styles.type}>Public Playlist</Text>
          <VStack space={8} alignItems="flex-start" justifyContent="flex-start" marginTop={10}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("LibraryExploreScreen", {
                  library: library,
                  from: "settings"
                })
              }>
              <HStack space={5} alignItems="center">
                {Platform.OS === 'web' ?
                  <Image source={require("../../../assets/icons/edit.svg")} width="24px" height="24px" alt="left" />
                  : <EditSvg width="24px" height="24px" />
                }
                <Text style={styles.label}>Edit</Text>
              </HStack>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsPrivate(!isPrivate)}>
              <HStack space={5} alignItems="center">
                {Platform.OS === 'web' ? (
                  isPrivate ? <Image source={require("../../../assets/icons/private.svg")} width="24px" height="24px" alt="left" />
                    : <Image source={require("../../../assets/icons/public.svg")} width="24px" height="24px" alt="left" />
                ) : (
                  isPrivate ? <PrivateSvg width="24px" height="24px" />
                    : <PublicSvg width="24px" height="24px" />
                )}
                <Text style={styles.label}>{isPrivate ? `Make Public` : `Make Private`}</Text>
              </HStack>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("LibraryScreen", { library: library, from: "settings" })}>
              <HStack space={5} alignItems="center">
                {Platform.OS === 'web' ?
                  <Image source={require("../../../assets/icons/plus.svg")} width="20px" height="20px" alt="left" />
                  : <PlusSvg width="20px" height="20px" />
                }
                <Text style={styles.label}>Add to other playlist</Text>
              </HStack>
            </TouchableOpacity>
            <TouchableOpacity>
              <HStack space={5} alignItems="center">
                {Platform.OS === 'web' ?
                  <Image source={require("../../../assets/icons/delete.svg")} width="24px" height="24px" alt="left" />
                  : <DeleteSvg width="24px" height="24px" />
                }
                <Text style={styles.label}>Delete Playlist</Text>
              </HStack>
            </TouchableOpacity>
          </VStack>
        </Center>
        <Center marginTop={10}>
          <TouchableOpacity
            onPress={() => navigation.navigate("LibraryExploreScreen", { library: library })}
            style={styles.closeBtn}
          >
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </Center>
      </ScrollView>
      <Footer navigation={navigation} routeName="HomeScreen" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageTitle: {
    fontFamily: "Archivo-Bold",
    fontSize: 12,
    color: COLOR.primary,
    lineHeight: 22,
  },
  cardContainer: {
    width: 182,
    height: 153,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  cardImage: {
    width: 180,
    height: 151,
    overflow: "hidden",
  },
  cardTitle: {
    fontFamily: "Archivo-Bold",
    fontSize: 15,
    color: COLOR.primary,
    textTransform: "uppercase",
    textAlign: "center",
    marginTop: 15
  },
  type: {
    fontFamily: "Archivo-Thin",
    fontSize: 10,
    color: COLOR.primary,
    textTransform: "capitalize",
    textAlign: "center",
    marginTop: 5,
    letterSpacing: 1.92
  },
  label: {
    fontFamily: "Archivo-SemiBold",
    fontSize: 15,
    color: COLOR.primary,
  },
  closeBtn: {
    width: 102,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLOR.primary,
    justifyContent: "center",
    alignItems: 'center',
  },
  closeText: {
    fontFamily: "Archivo-Bold",
    fontSize: 15,
    color: COLOR.black,
    textTransform: "uppercase",
  }
})

export default LibrarySettings;