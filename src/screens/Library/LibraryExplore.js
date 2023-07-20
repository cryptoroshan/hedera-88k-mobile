import React, { useState } from "react";
import { Dimensions, Platform, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Box, Center, HStack, Image, Stack, Text, VStack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

// Icons
import { Entypo } from "@expo/vector-icons";
import LeftSvg from "../../../assets/icons/left.svg";
import SearchSvg from "../../../assets/icons/search.svg";
import PlaySvg from "../../../assets/icons/play.svg";
import PauseSvg from "../../../assets/icons/pause.svg";
import ShuffleSvg from "../../../assets/icons/shuffle.svg";
import RepeatSvg from "../../../assets/icons/repeat.svg";
import ShareSvg from "../../../assets/icons/share.svg";
import PlusSvg from "../../../assets/icons/plus.svg";
import RadioSvg from "../../../assets/icons/radiobtn.svg";
import ActiveRadioSvg from "../../../assets/icons/radiobtn_active.svg";

// Constants
import Footer from "../../components/Footer";
import { COLOR } from "../../constants/Color";
import { MusicList } from "../../constants/static";

const { width } = Dimensions.get("window");

const LibraryExplore = ({ navigation, route }) => {
  const { library } = route.params;

  const [isPaused, setIsPaused] = useState(true);
  const [deleteItem, setDeleteItem] = useState([]);

  const deleteList = (selectedId) => {
    let ids = deleteItem.slice();
    if (ids.includes(selectedId)) {
      ids = ids.filter(id => id !== selectedId);
    } else {
      ids.push(selectedId);
    }
    setDeleteItem(ids);
  };

  return (
    <SafeAreaView style={{ flex: 1, width: "100%", backgroundColor: COLOR.black }}>
      <ScrollView>
        <HStack justifyContent="space-between" paddingX="30px" marginTop="18px">
          <TouchableOpacity onPress={() => navigation.navigate("LibraryScreen", { from: "explore" })} style={{ marginTop: 15 }}>
            {Platform.OS === 'web' ?
              <Image source={require("../../../assets/icons/left.svg")} width="13px" height="19px" alt="left" />
              :
              <LeftSvg width="13px" height="19px" />
            }
          </TouchableOpacity>
          <Text style={styles.pageTitle}>Explore</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SearchExploreScreen")} style={{ marginTop: 13 }}>
            {Platform.OS === 'web' ?
              <Image source={require("../../../assets/icons/search.svg")} width="24px" height="24px" alt="search" />
              :
              <SearchSvg width="24px" height="24px" />
            }
          </TouchableOpacity>
        </HStack>
        {/* Card Image */}
        <Center>
          <Box style={styles.cardContainer}>
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
        </Center>
        {/* ToolBar */}
        <HStack justifyContent="space-between" alignItems="center" paddingX="35px" marginTop="40px">
          <TouchableOpacity onPress={() => navigation.navigate("LibrarySettingsScreen", { library: library })}>
            <Entypo name="dots-three-horizontal" size={22} color={COLOR.primary} />
          </TouchableOpacity>
          <TouchableOpacity>
            {Platform.OS === 'web' ?
              <Image source={require("../../../assets/icons/shuffle.svg")} width="49px" height="49px" alt="shuffle" />
              :
              <ShuffleSvg width="49px" height="49px" />
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsPaused(!isPaused)}>
            {Platform.OS === 'web' ? (
              isPaused ? <Image source={require("../../../assets/icons/play.svg")} width="42px" height="42px" alt="play" />
                : <Image source={require("../../../assets/icons/pause.svg")} width="42px" height="42px" alt="pause" />
            ) : (
              isPaused ? <PlaySvg width="42px" height="42px" />
                : <PauseSvg width="42px" height="42px" />
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            {Platform.OS === 'web' ?
              <Image source={require("../../../assets/icons/repeat.svg")} width="47px" height="47px" alt="repeat" />
              :
              <RepeatSvg width="47px" height="47px" />
            }
          </TouchableOpacity>
          <TouchableOpacity>
            {Platform.OS === 'web' ?
              <Image source={require("../../../assets/icons/share.svg")} width="28px" height="32px" alt="share" />
              :
              <ShareSvg width="28px" height="32px" />
            }
          </TouchableOpacity>
        </HStack>
        {/* Music List */}
        <VStack space={4} paddingX="35px" marginY="21px">
          {route.params.from !== "settings" &&
            <HStack justifyContent="space-between" alignItems="center">
              <TouchableOpacity>
                <HStack space={2} alignItems="center">
                  <Box style={styles.add}>
                    {Platform.OS === 'web' ?
                      <Image source={require("../../../assets/icons/plus.svg")} width="28px" height="28px" alt="plus" />
                      :
                      <PlusSvg width="28px" height="28px" />
                    }
                  </Box>
                  <Text style={styles.title}>Add Songs</Text>
                </HStack>
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo name="dots-three-horizontal" size={20} color={COLOR.primary} />
              </TouchableOpacity>
            </HStack>
          }
          {
            MusicList.map((item, index) =>
              <HStack justifyContent="space-between" alignItems="center" key={index}>
                <TouchableOpacity>
                  <HStack space={2}>
                    <Box style={styles.avatar} />
                    <VStack justifyContent="space-between" paddingY="5px">
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.name}>{item.name}</Text>
                    </VStack>
                  </HStack>
                </TouchableOpacity>
                {route.params.from !== "settings" &&
                  <TouchableOpacity>
                    <Entypo name="dots-three-horizontal" size={20} color={COLOR.primary} />
                  </TouchableOpacity>
                }
                {route.params.from === "settings" &&
                  <TouchableOpacity onPress={() => deleteList(item.id)}>
                    {Platform.OS === 'web' ? (
                      deleteItem.includes(item.id) ? <Image source={require("../../../assets/icons/radiobtn_active.svg")} width="15px" height="15px" alt="radio" />
                        : <Image source={require("../../../assets/icons/radiobtn.svg")} width="15px" height="15px" alt="radio" />
                    ) : (
                      deleteItem.includes(item.id) ? <ActiveRadioSvg width="15px" height="15px" />
                        : <RadioSvg width="15px" height="15px" />
                    )}
                  </TouchableOpacity>
                }
              </HStack>
            )
          }
        </VStack>
        {route.params.from === "settings" &&
          <VStack marginTop={6} space={5} alignItems="center">
            <TouchableOpacity
              style={styles.deleteBtn}
            >
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("LibrarySettingsScreen", { library: library })}
              style={styles.deleteBtn}
            >
              <Text style={styles.deleteText}>Cancel</Text>
            </TouchableOpacity>
          </VStack>
        }
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
    marginTop: 15,
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
  add: {
    width: 57,
    height: 57,
    borderRadius: 10,
    backgroundColor: COLOR.darkGray,
    alignItems: "center",
    justifyContent: "center"
  },
  avatar: {
    width: 57,
    height: 57,
    borderRadius: 10,
    backgroundColor: COLOR.primary
  },
  title: {
    fontFamily: "Archivo-SemiBold",
    fontSize: 15,
    color: COLOR.primary
  },
  name: {
    fontFamily: "Archivo-Thin",
    fontSize: 10,
    color: COLOR.primary
  },
  deleteBtn: {
    width: 102,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLOR.primary,
    justifyContent: "center",
    alignItems: 'center',
  },
  deleteText: {
    fontFamily: "Archivo-Bold",
    fontSize: 12,
    color: COLOR.black,
  }
})

export default LibraryExplore;