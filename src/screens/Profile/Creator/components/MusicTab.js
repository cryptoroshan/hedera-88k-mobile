import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Box, Center, HStack, Image, Stack, Text, VStack, } from "native-base";
import { SvgXml } from "react-native-svg";

// Icons
import { Entypo } from "@expo/vector-icons";
import { LeftIcon, PlayIcon, PlusIcon, RadioBtn, ActiveRadioBtn } from "../../../../constants/icons";

// Constants
import { COLOR } from "../../../../constants/Color";
import { DraftFiles, PopularData } from "../../../../constants/static";

// Components
import Avatar from "../../../../components/Avatar";

const MusicTab = () => {

  const [isDraftFiles, setIsDraftFiles] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const addItems = (selectedItem) => {
    let tempItems = selectedItems.slice();
    let stats = tempItems.filter(item => item.id === selectedItem.id);
    if (stats.length > 0) {
      tempItems = selectedItems.filter(item => item.id !== selectedItem.id);
    } else {
      tempItems.push(selectedItem);
    }
    setSelectedItems(tempItems);
  };

  return (
    <Stack width="100%" paddingX="25px">
      {!isDraftFiles ?
        <Stack marginTop={3}>
          <TouchableOpacity onPress={() => setIsDraftFiles(true)}>
            <HStack width="full" alignItems="center">
              <VStack style={styles.draftBox}>
                <Text fontFamily="Archivo-Bold" color={COLOR.primary} fontSize={12}>
                  Draft Files
                </Text>
                <Text fontFamily="Archivo" color={COLOR.primary} fontSize={9} lineHeight={10} numberOfLines={2}>
                  Add draft files to this private space and publish later
                </Text>
              </VStack>
              <HStack height="90px" marginLeft="-17%" marginTop="10px">
                <Box style={styles.draftImage1}>
                  <Image
                    source={{ uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" }}
                    width="100%" height="100%" resizeMode="cover" borderRadius="10px"
                    backgroundColor={COLOR.black} position="absolute" opacity={0.8}
                    alt="profile-1"
                  />
                  <HStack width="100%" height="100%" justifyContent="center" alignItems="center">
                    <SvgXml xml={PlusIcon} width={31} height={31} />
                  </HStack>
                </Box>
                <Box style={styles.draftImage2}>
                  <Image
                    source={{ uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" }}
                    width="100%" height="100%" resizeMode="cover" borderRadius="10px"
                    backgroundColor={COLOR.black} position="absolute" opacity={0.8}
                    alt="profile-2"
                  />
                </Box>
                <Box style={styles.draftImage3}>
                  <Image
                    source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }}
                    width="100%" height="100%" resizeMode="cover" borderRadius="10px"
                    backgroundColor={COLOR.black} position="absolute" opacity={0.8}
                    alt="profile-3"
                  />
                </Box>
              </HStack>
            </HStack>
          </TouchableOpacity>
          <Stack marginTop={4}>
            <Text style={styles.title}>
              Latest Release
            </Text>
            <TouchableOpacity>
              <HStack marginTop="20px" space={4}>
                <Box style={styles.latestCard}>
                  <Avatar
                    name="Latest Release"
                    uri="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    size={104} borderRadius={10} style={{ position: "absolute" }}
                  />
                  <Box style={styles.playBtn}>
                    <SvgXml xml={PlayIcon} width={30} height={30} />
                  </Box>
                </Box>
                <VStack justifyContent="center" space={2}>
                  <Text fontFamily="Archivo-Bold" fontSize={17} color={COLOR.white}>
                    {`Hotline (edit)`}
                  </Text>
                  <Text fontFamily="Archivo" fontSize={12} color={COLOR.lightGray2}>
                    Billie Eilish
                  </Text>
                </VStack>
              </HStack>
            </TouchableOpacity>
          </Stack>
          <Stack marginTop={8}>
            <Text style={styles.title}>
              Popular Songs
            </Text>
            <Stack marginTop="20px">
              {PopularData.map((item, index) =>
                <HStack w="full" justifyContent="space-between" alignItems="center" marginBottom={3} key={index}>
                  <HStack space={2} alignItems="center">
                    <Avatar name={item.title} src={item.image} size={57} radius={10} />
                    <Text fontFamily="Archivo-Bold" fontSize={15} color={COLOR.white} numberOfLines={2}>{item.title}</Text>
                  </HStack>
                  <TouchableOpacity>
                    <Entypo name="dots-three-horizontal" size={20} color={COLOR.white} />
                  </TouchableOpacity>
                </HStack>
              )}
            </Stack>
            <TouchableOpacity>
              <Text style={styles.seeAll}>
                See All Songs
              </Text>
            </TouchableOpacity>
          </Stack>
          <Stack marginTop={6}>
            <Text style={styles.title}>
              Popular Albums
            </Text>
            <HStack marginTop="20px" justifyContent="space-between">
              <TouchableOpacity style={styles.card}>
                <Box style={styles.cardImage}>
                  <Image
                    source={{ uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" }}
                    width="100%" height="100%" resizeMode="cover"
                    alt="Albums-1"
                  />
                </Box>
                <Box marginTop="10px">
                  <Text style={styles.cardTitle} numberOfLines={3}>Happier Than Ever</Text>
                  <Text style={styles.caption}>{`2021 | Album`}</Text>
                </Box>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card}>
                <Box style={styles.cardImage}>
                  <Image
                    source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }}
                    width="100%" height="100%" resizeMode="cover"
                    alt="Albums-1"
                  />
                </Box>
                <Box marginTop="10px">
                  <Text style={styles.cardTitle} numberOfLines={3}>
                    WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?
                  </Text>
                  <Text style={styles.caption}>{`2021 | Album`}</Text>
                </Box>
              </TouchableOpacity>
            </HStack>
            <TouchableOpacity style={{ marginTop: 15 }}>
              <Text style={styles.seeAll}>
                See All Albums
              </Text>
            </TouchableOpacity>
          </Stack>
          <Center marginTop={8}>
            <TouchableOpacity style={styles.discography}>
              <Text fontFamily="Archivo-Bold" fontSize="10px" textTransform="uppercase">Discography</Text>
            </TouchableOpacity>
          </Center>
        </Stack>
        :
        <Stack marginTop={6}>
          <HStack justifyContent="space-between" alignItems="center" width="100%" marginBottom="20px">
            <HStack justifyContent="flex-start" alignItems="center" space={3}>
              <TouchableOpacity onPress={() => setIsDraftFiles(false)}>
                <SvgXml xml={LeftIcon} width={11} height={17} />
              </TouchableOpacity>
              <Text fontFamily="Archivo-Bold" fontSize={20} color={COLOR.white}>
                Draft Files
              </Text>
            </HStack>
            <Text fontFamily="Archivo" fontSize={12} color={COLOR.gray1}>
              Select
            </Text>
          </HStack>
          <VStack space={3}>
            {DraftFiles.map((item, index) =>
              <TouchableOpacity onPress={() => addItems(item)} key={`${item.name}-${index}`}>
                <HStack justifyContent="space-between" alignItems="center">
                  <HStack justifyContent="flex-start" alignItems="center" space={3}>
                    <Avatar name={item.name} src={item.image} size={57} radius={10} />
                    <Text fontFamily="Archivo-Bold" fontSize={15} color={COLOR.white}>
                      {item.name}
                    </Text>
                  </HStack>
                  {
                    selectedItems.filter(selectedItem => selectedItem.id === item.id).length > 0 ?
                      <SvgXml xml={ActiveRadioBtn} width={14} height={14} />
                      :
                      <SvgXml xml={RadioBtn} width={14} height={14} />
                  }
                </HStack>
              </TouchableOpacity>
            )}
          </VStack>
          <HStack justifyContent="center" space={3} marginTop="25px">
            <TouchableOpacity style={styles.delete}>
              <Text fontFamily="Archivo-Bold" fontSize={10} color={COLOR.primary}>
                Delete
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.next}>
              <Text fontFamily="Archivo-Bold" fontSize={10} color={COLOR.black}>
                Delete
              </Text>
            </TouchableOpacity>
          </HStack>
        </Stack>
      }
    </Stack>
  );
};

const styles = StyleSheet.create({
  draftBox: {
    width: "85%",
    height: 70,
    borderRadius: 7,
    paddingLeft: 15,
    paddingRight: "15%",
    paddingVertical: 15,
    backgroundColor: COLOR.darkGray,
    justifyContent: "space-between",
  },
  draftImage1: {
    width: 82,
    height: 82,
    backgroundColor: COLOR.black,
    borderRadius: 10,
    zIndex: 3,
  },
  draftImage2: {
    position: "absolute",
    width: 82,
    height: 82,
    marginLeft: 7,
    backgroundColor: COLOR.black,
    borderRadius: 10,
    transform: [{ rotate: '3.75deg' }],
    zIndex: 2,
  },
  draftImage3: {
    position: "absolute",
    width: 82,
    height: 82,
    marginLeft: 14,
    backgroundColor: COLOR.black,
    borderRadius: 10,
    transform: [{ rotate: '7.208deg' }],
    zIndex: 1,
  },
  title: {
    fontFamily: "Archivo-Bold",
    fontSize: 20,
    color: COLOR.white
  },
  latestCard: {
    width: 104,
    height: 104,
    borderRadius: 10,
    overflow: "hidden"
  },
  playBtn: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  seeAll: {
    fontFamily: "Archivo-Bold",
    fontSize: 12,
    color: COLOR.lightGray2,
    textTransform: "uppercase"
  },
  card: {
    width: "49%",
    height: 270,
    borderRadius: 6,
    backgroundColor: "rgba(248, 248, 248, 0.08)",
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  cardImage: {
    width: "100%",
    height: 155,
    overflow: "hidden",
  },
  cardTitle: {
    fontFamily: "Archivo-Bold",
    fontSize: 15,
    color: COLOR.white,
    lineHeight: 16,
  },
  caption: {
    fontFamily: "Archivo",
    fontSize: 10,
    color: "rgba(255, 255, 255, 0.60)",
    textTransform: "uppercase",
  },
  discography: {
    width: 136,
    height: 35,
    borderRadius: 24,
    backgroundColor: COLOR.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  delete: {
    width: 85,
    height: 35,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLOR.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  next: {
    width: 85,
    height: 35,
    borderRadius: 20,
    backgroundColor: COLOR.primary,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default MusicTab;