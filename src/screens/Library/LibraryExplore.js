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
  ShareIcon,
  PlusIcon,
  RadioBtn,
  ActiveRadioBtn,
} from "../../constants/icons";
import { Entypo } from "@expo/vector-icons";

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
    <SafeAreaView
      flex={1}
      width="100%"
      backgroundColor={COLOR.black}
    >
      <ScrollView flex={1}>
        {/* Header */}
        <HStack justifyContent="space-between" paddingX="30px" marginTop="18px">
          <TouchableOpacity onPress={() => navigation.navigate("LibraryScreen", { from: "explore" })} style={{ marginTop: 15 }}>
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
            <SvgXml xml={ShuffleIcon} width={49} height={49} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsPaused(!isPaused)}>
            <SvgXml xml={isPaused ? PlayIcon : PauseIcon} width={42} height={42} />
          </TouchableOpacity>
          <TouchableOpacity>
            <SvgXml xml={RepeatIcon} width={47} height={47} />
          </TouchableOpacity>
          <TouchableOpacity>
            <SvgXml xml={ShareIcon} width={28} height={32} />
          </TouchableOpacity>
        </HStack>
        {/* Music List */}
        <VStack space={4} paddingX="35px" marginY="21px">
          {route.params.from !== "settings" &&
            <HStack justifyContent="space-between" alignItems="center">
              <TouchableOpacity>
                <HStack space={2} alignItems="center">
                  <Box style={styles.add}>
                    <SvgXml xml={PlusIcon} width={28} height={28} />
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
                    <SvgXml
                      xml={deleteItem.includes(item.id) ? ActiveRadioBtn : RadioBtn}
                      width={15} height={15}
                    />
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