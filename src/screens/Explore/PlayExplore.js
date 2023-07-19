import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Box, Center, HStack, Image, Stack, Text, VStack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";

// Icons
import {
  LeftIcon,
  SearchIcon,
  PlayIcon,
  PauseIcon,
  ShuffleIcon,
  RepeatIcon,
  HeartIcon,
} from "../../constants/icons";
import { Entypo } from "@expo/vector-icons";

// Constants
import Footer from "../../components/Footer";
import { COLOR } from "../../constants/Color";
import { MusicList } from "../../constants/static";

const { width } = Dimensions.get("window");

const PlayExplore = ({ navigation, route }) => {
  const { artist } = route.params;

  const [isPaused, setIsPaused] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <SafeAreaView
      flex={1}
      width="100%"
      backgroundColor={COLOR.black}
    >
      <ScrollView flex={1}>
        {/* Header */}
        <HStack justifyContent="space-between" paddingX="30px" marginTop="18px">
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 15 }}>
            <SvgXml xml={LeftIcon} width={13} height={19} />
          </TouchableOpacity>
          <Text style={styles.pageTitle}>Explore</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SearchExploreScreen")} style={{ marginTop: 13 }}>
            <SvgXml xml={SearchIcon} width={24} height={24} />
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
            <SvgXml xml={ShuffleIcon} width={49} height={49} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsPaused(!isPaused)}>
            <SvgXml xml={isPaused ? PlayIcon : PauseIcon} width={42} height={42} />
          </TouchableOpacity>
          <TouchableOpacity>
            <SvgXml xml={RepeatIcon} width={47} height={47} />
          </TouchableOpacity>
          <TouchableOpacity>
            <SvgXml xml={HeartIcon} width={29} height={22.8} />
          </TouchableOpacity>
        </HStack>
        {/* Music List */}
        <VStack space={4} paddingX="35px" marginY="21px">
          {
            MusicList.map((item, index) =>
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
            <SvgXml xml={isPaused ? PlayIcon : PauseIcon} width={30} height={30} />
          </TouchableOpacity>
        </HStack>
      }
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