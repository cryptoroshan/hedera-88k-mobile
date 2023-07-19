import React, { useState } from "react";
import { Actionsheet, HStack, Text, View, Stack, Center, VStack, Input } from "native-base";
import { Dimensions, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import { COLOR } from "../../../constants/Color";
import { Playlist } from "../../../constants/static";

const { width, height } = Dimensions.get("window");

const BookMark = ({ isOpen, onClose }) => {

  const [isOpenPlaylist, setIsOpenPlaylist] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isNewPlaylist, setIsNewPlaylist] = useState(false);
  const [name, setName] = useState(null);

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
      {
        !isOpenPlaylist ?
          <Actionsheet.Content backgroundColor="transparent" bottom="75px">
            <HStack w="100%" h={60} backgroundColor="transparent" />
            <HStack
              width={width}
              paddingY="16px"
              paddingLeft="1/5"
              paddingRight="8"
              backgroundColor={COLOR.yellow}
              borderTopRadius="13px"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text style={styles.title}>Added to Your Library</Text>
              <TouchableOpacity onPress={() => setIsOpenPlaylist(true)}>
                <Text style={styles.link}>Choose Playlist</Text>
              </TouchableOpacity>
            </HStack>
          </Actionsheet.Content>
          : !isNewPlaylist ?
            <Actionsheet.Content
              h={height * 2 / 3}
              backgroundColor={COLOR.yellow}
              bottom="75px"
              borderTopRadius="13px"
            >
              <HStack
                w={width}
                paddingY="10px"
                justifyContent="center"
                alignItems="center"
              >
                <Text style={styles.title}>Add To Playlist</Text>
                <Text style={styles.close}>___</Text>
              </HStack>
              <Stack w="100%">
                <TouchableOpacity onPress={() => setIsNewPlaylist(true)} style={styles.item}>
                  <HStack space={8} alignItems="center">
                    <View style={styles.cardImage}>
                      <AntDesign name="plus" size={35} color={COLOR.white} />
                    </View>
                    <Text style={styles.cardTitle}>Create New Playlist</Text>
                  </HStack>
                  <AntDesign name="right" size={16} color="black" />
                </TouchableOpacity>
                <ScrollView style={{ height: height * 2 / 3 - 150 }}>
                  {
                    Playlist.map((item, index) =>
                      <TouchableOpacity
                        onPress={() => setSelectedItem(item)}
                        style={styles.item}
                        key={index}
                      >
                        <HStack space={8} alignItems="center">
                          <View style={styles.cardImage}></View>
                          <Text style={styles.cardTitle}>{item.name}</Text>
                        </HStack>
                        {
                          selectedItem?.id === item.id ?
                            <Ionicons name="checkmark-circle" size={16} color="black" />
                            :
                            <Ionicons name="radio-button-off" size={16} color="black" />
                        }
                      </TouchableOpacity>
                    )
                  }
                  <Center>
                    <TouchableOpacity
                      onPress={onClose}
                      style={styles.addbtn}
                    >
                      <Text style={styles.btnText}>Add</Text>
                    </TouchableOpacity>
                  </Center>
                </ScrollView>
              </Stack>
            </Actionsheet.Content>
            :
            <Actionsheet.Content
              h={height * 2 / 3}
              backgroundColor={COLOR.yellow}
              bottom="75px"
              borderTopRadius="13px"
            >
              <HStack
                w={width}
                paddingY="10px"
                justifyContent="center"
                alignItems="center"
              >
                <Text style={styles.title}></Text>
                <Text style={styles.close}>___</Text>
              </HStack>
              <VStack w="100%" h="100%" justifyContent="center" alignItems="center" paddingX={35} space={5}>
                <Text style={styles.title1}>Name Your Playlist</Text>
                <Input
                  variant="filled"
                  placeholder="Text"
                  placeholderTextColor="#6F6F6F"
                  backgroundColor={COLOR.black}
                  borderColor="transparent"
                  borderRadius="7px"
                  height="36px"
                  fontSize="16px"
                  color={COLOR.white}
                  cursorColor={COLOR.white}
                  value={name}
                  onChangeText={(text) => setName(text)}
                />
                <TouchableOpacity
                  style={{
                    ...styles.begin,
                    backgroundColor: name ? COLOR.black : "transparent"
                  }}
                  disabled={name ? false : true}
                >
                  <Text style={{ ...styles.beginText, color: name ? COLOR.white : COLOR.black }}>
                    Let's Begin
                  </Text>
                </TouchableOpacity>
              </VStack>
            </Actionsheet.Content>
      }
    </Actionsheet>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Archivo-Bold",
    fontSize: 12,
    color: COLOR.black,
    textTransform: "uppercase",
  },
  link: {
    fontFamily: "Archivo-Bold",
    fontSize: 10,
    color: COLOR.black,
    textDecorationLine: "underline",
  },
  close: {
    fontFamily: "Archivo-Bold",
    fontSize: 10,
    color: COLOR.black,
    textDecorationLine: "underline",
    position: "absolute",
    right: 30,
    top: 5
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 53,
    paddingRight: 40
  },
  cardImage: {
    width: 59,
    height: 59,
    borderRadius: 6,
    backgroundColor: COLOR.black,
    justifyContent: "center",
    alignItems: "center"
  },
  cardTitle: {
    fontFamily: "Archivo-Medium",
    fontSize: 12,
    color: COLOR.black,
  },
  addbtn: {
    width: "40%",
    paddingVertical: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR.black,
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 10
  },
  btnText: {
    fontFamily: "Archivo-Medium",
    textTransform: "uppercase",
    fontSize: 12
  },
  title1: {
    fontFamily: "Archivo-Bold",
    fontSize: 16,
    color: COLOR.black,
    textTransform: "uppercase",
  },
  begin: {
    width: "50%",
    paddingVertical: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR.black,
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 10
  },
  beginText: {
    fontFamily: "Archivo-Bold",
    textTransform: "uppercase",
    fontSize: 14
  }
});

export default BookMark;