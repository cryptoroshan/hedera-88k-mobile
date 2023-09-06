import React, { useEffect, useState } from "react";
import { Dimensions, Platform, ScrollView, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Box, Center, HStack, Image, Stack, Text, VStack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";

// Icons
import { Entypo } from "@expo/vector-icons";
import LeftSvg from "../../../assets/icons/left.svg";
import SearchSvg from "../../../assets/icons/search.svg";
import PlaySvg from "../../../assets/icons/play.svg";
import PauseSvg from "../../../assets/icons/pause.svg";
import ShuffleSvg from "../../../assets/icons/shuffle.svg";
import RepeatSvg from "../../../assets/icons/repeat.svg";
import HeartSvg from "../../../assets/icons/heart.svg";

// Constants
import Footer from "../../components/Footer";
import { COLOR } from "../../constants/Color";
import { MusicList } from "../../constants/static";

import { getRequest, postRequest } from "../../components/apiRequests";
import * as env from "../../../env";


const { width } = Dimensions.get("window");

const PlayExplore = ({ navigation, route }) => {
  const { artist } = route.params;
  console.log(artist);

  const [isPaused, setIsPaused] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [musicList, setMusicList] = useState(null);

  useEffect(() => {
    getMusicList();
  }, [])

  const getMusicList = async () => {
    const _musicInfo = await getRequest(
      env.SERVER_URL + "/api/88k/get_music_list"
    );
    if (!_musicInfo) {
      Alert.alert("Something wrong with server!");
      return;
    }
    if (!_musicInfo.result) {
      Alert.alert(_musicInfo.error);
      return;
    }
    setMusicList(_musicInfo.data);
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1, width: "100%", backgroundColor: COLOR.black }}>
        <ScrollView flex={1}>
          {/* Header */}
          <HStack justifyContent="space-between" paddingX="30px" marginTop="18px">
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 15 }}>
              {Platform.OS === 'web' ? <Image source={require("../../../assets/icons/left.svg")} width="13px" height="19px" alt="left" />
                : <LeftSvg width="13px" height="19px" />
              }
            </TouchableOpacity>
            <Text style={styles.pageTitle}>Explore</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SearchExploreScreen")} style={{ marginTop: 13 }}>
              {Platform.OS === 'web' ? <Image source={require("../../../assets/icons/search.svg")} width="24px" height="24px" alt="left" />
                : <SearchSvg width="24px" height="24px" />
              }
            </TouchableOpacity>
          </HStack>
          {/* Card Image */}
          <Center>
            <Box style={styles.cardContainer}>
              <Stack style={styles.cardImage}>
                <Image
                  source={artist.image}
                  opacity={0.8}
                  width="100%"
                  height="100%"
                  borderRadius="11px"
                  alt={artist.title}
                />
              </Stack>
              <Text style={styles.cardTitle} numberOfLines={2}>{artist.title}</Text>
            </Box>
          </Center>
          {/* ToolBar */}
          <HStack justifyContent="space-between" alignItems="center" paddingX="35px" marginTop="40px">
            <TouchableOpacity>
              <Entypo name="dots-three-horizontal" size={22} color={COLOR.primary} />
            </TouchableOpacity>
            <TouchableOpacity>
              {Platform.OS === 'web' ? <Image source={require("../../../assets/icons/shuffle.svg")} width="49px" height="49px" alt="left" />
                : <ShuffleSvg width="49px" height="49px" />
              }
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsPaused(!isPaused)}>
              {isPaused ? (
                Platform.OS === 'web' ? <Image source={require("../../../assets/icons/play.svg")} width="42px" height="42px" alt="play" />
                  : <PlaySvg width="42px" height="42px" />
              ) : (
                Platform.OS === 'web' ? <Image source={require("../../../assets/icons/pause.svg")} width="42px" height="42px" alt="play" />
                  : <PauseSvg width="42px" height="42px" />
              )}
            </TouchableOpacity>
            <TouchableOpacity>
              {Platform.OS === 'web' ? <Image source={require("../../../assets/icons/repeat.svg")} width="47px" height="47px" alt="left" />
                : <RepeatSvg width="47px" height="47px" />
              }
            </TouchableOpacity>
            <TouchableOpacity>
              {Platform.OS === 'web' ? <Image source={require("../../../assets/icons/heart.svg")} width="29px" height="22.8px" alt="left" />
                : <HeartSvg width="29px" height="22.8px" />
              }
            </TouchableOpacity>
          </HStack>
          {/* Music List */}
          <VStack space={4} paddingX="35px" marginY="21px">
            {musicList !== null &&
              musicList.map((item, index) =>
                <HStack justifyContent="space-between" alignItems="center" key={index}>
                  <TouchableOpacity onPress={() => setSelectedItem(item)}>
                    <HStack space={2}>
                      <Box style={styles.avatar} />
                      <VStack justifyContent="space-between" paddingY="5px">
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.name}>{item.name}</Text>
                      </VStack>
                    </HStack>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Entypo name="dots-three-horizontal" size={20} color={COLOR.primary} />
                  </TouchableOpacity>
                </HStack>
              )
            }
          </VStack>
        </ScrollView>
        {selectedItem &&
          <HStack
            width={width}
            height="87px"
            paddingX="35px"
            justifyContent="space-between"
            alignItems="center"
            backgroundColor={COLOR.yellow}>
            <TouchableOpacity onPress={() => navigation.navigate("PlayScreen", { music: selectedItem })}>
              <HStack space={2}>
                <Box style={styles.avatar} />
                <VStack justifyContent="space-between" paddingY="5px">
                  <Text style={styles.title}>{selectedItem.title}</Text>
                  <Text style={styles.name}>{selectedItem.name}</Text>
                </VStack>
              </HStack>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsPaused(!isPaused)}>
              {isPaused ? (
                Platform.OS === 'web' ? <Image source={require("../../../assets/icons/play.svg")} width="30px" height="30px" alt="play" />
                  : <PlaySvg width="30px" height="30px" />
              ) : (
                Platform.OS === 'web' ? <Image source={require("../../../assets/icons/pause.svg")} width="30px" height="30px" alt="play" />
                  : <PauseSvg width="30px" height="30px" />
              )}
            </TouchableOpacity>
          </HStack>
        }
      </SafeAreaView>
      <Footer navigation={navigation} routeName="HomeScreen" />
    </>
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
    width: 180,
    height: 151,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    marginTop: 21,
  },
  cardImage: {
    position: "absolute",
    width: 180,
    height: 151,
    overflow: "hidden",
  },
  cardTitle: {
    fontFamily: "Archivo-Bold",
    fontSize: 15,
    color: COLOR.primary,
    textTransform: "uppercase",
    textAlign: "center"
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
  }
})

export default PlayExplore;