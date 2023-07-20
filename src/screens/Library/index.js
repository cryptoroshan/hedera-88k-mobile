import React, { useState } from "react";
import { Avatar, Box, HStack, Image, Text, VStack, PresenceTransition, Input, Stack } from "native-base";
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Icons
import SearchSvg from "../../../assets/icons/search.svg";
import PlusSvg from "../../../assets/icons/plus.svg";
import ChatSvg from "../../../assets/icons/chat-left.svg";
import RadioSvg from "../../../assets/icons/radiobtn.svg";
import ActiveRadioSvg from "../../../assets/icons/radiobtn_active.svg";

// Constants
import { COLOR } from "../../constants/Color";
import { LibraryList } from "../../constants/static";

// Components
import Footer from "../../components/Footer";

const { width } = Dimensions.get("window");

const Library = ({ navigation, route }) => {

  const [searchOpened, setSearchOpened] = useState(false);
  const [addItems, setAddItems] = useState([]);

  const addList = (selectedId) => {
    let ids = addItems.slice();
    if (ids.includes(selectedId)) {
      ids = ids.filter(id => id !== selectedId);
    } else {
      ids.push(selectedId);
    }
    setAddItems(ids);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView flex={1}>
        <HStack justifyContent="space-between" width={width} marginTop={3} paddingX="25px">
          <HStack space={6} alignItems="center">
            <TouchableOpacity onPress={() => setSearchOpened(!searchOpened)}>
              {Platform.OS === 'web' ?
                <Image source={require("../../../assets/icons/search.svg")} width="23px" height="24px" alt="search" />
                : <SearchSvg width="23px" height="24px" />
              }
            </TouchableOpacity>
            <TouchableOpacity>
              {Platform.OS === 'web' ?
                <Image source={require("../../../assets/icons/plus.svg")} width="18px" height="18px" alt="search" />
                : <PlusSvg width="18px" height="18px" />
              }
            </TouchableOpacity>
          </HStack>
          <Text style={styles.pageTitle}>Library</Text>
          <HStack space={4} alignItems="center">
            <TouchableOpacity style={{ width: 42, height: 42, overflow: 'hidden' }}>
              {Platform.OS === 'web' ?
                <Image source={require("../../../assets/icons/chat-left.svg")} width="42px" height="42px" alt="search" />
                : <ChatSvg width="42px" height="42px" />
              }
            </TouchableOpacity>
            <TouchableOpacity>
              <Avatar
                source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }}
                size="32px"
              />
            </TouchableOpacity>
          </HStack>
        </HStack>
        {/* SearchBar */}
        {searchOpened &&
          <PresenceTransition
            visible={searchOpened}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 250 } }}
          >
            <Stack marginX="39px" marginTop={5}>
              <Input
                w={"100%"} h={"35px"}
                placeholder="Search"
                backgroundColor={COLOR.primary}
                color={COLOR.black}
                placeholderTextColor="#B4B4B4"
                fontSize={16}
              />
            </Stack>
          </PresenceTransition>
        }
        {/* Content */}
        <VStack space={5} marginY={7} marginX="25px">
          {LibraryList.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("LibraryExploreScreen", { library: item })}
                key={`${index}-${item.title}`}
              >
                <HStack justifyContent="space-between" alignItems="center">
                  <HStack space={3} alignItems="center">
                    <Box style={styles.photo}>
                      <Image
                        source={{ uri: item.image }}
                        width="100%" height="100%"
                        resizeMode="cover"
                        alt={item.title}
                      />
                    </Box>
                    <VStack space={1}>
                      <Text style={styles.cardTitle}>{item.title}</Text>
                      <Text style={styles.username}>{item.username}</Text>
                    </VStack>
                  </HStack>
                  {route.params && route.params.from === "settings" &&
                    <TouchableOpacity onPress={() => addList(item.id)}>
                      {Platform.OS === 'web' ? (
                        addItems.includes(item.id) ?
                          <Image source={require("../../../assets/icons/radiobtn_active.svg")} width="15px" height="15px" alt="radiobtn" />
                          : <Image source={require("../../../assets/icons/radiobtn.svg")} width="15px" height="15px" alt="radiobtn" />
                      ) : (
                        addItems.includes(item.id) ?
                          <RadioSvg width="15px" height="15px" />
                          : <ActiveRadioSvg width="15px" height="15px" />
                      )}
                    </TouchableOpacity>
                  }
                </HStack>
              </TouchableOpacity>
            );
          })}
        </VStack>
        {route.params && route.params.from === "settings" &&
          <VStack marginY={4} alignItems="center">
            <TouchableOpacity
              onPress={() => navigation.navigate("LibrarySettingsScreen", { library: route.params.library })}
              style={styles.doneBtn}
            >
              <Text style={styles.doneText}>Done</Text>
            </TouchableOpacity>
          </VStack>
        }
      </ScrollView>
      <Footer navigation={navigation} routeName={"LibraryScreen"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageTitle: {
    fontFamily: "Archivo-Bold",
    fontSize: 12,
    color: COLOR.white,
    lineHeight: 22,
  },
  photo: {
    width: 69,
    height: 69,
    borderRadius: 10,
    overflow: 'hidden'
  },
  cardTitle: {
    fontFamily: "Archivo-Bold",
    color: COLOR.white,
    fontSize: 15
  },
  username: {
    fontFamily: "Archivo",
    color: COLOR.gray1,
    fontSize: 10,
    textTransform: "uppercase"
  },
  doneBtn: {
    width: 102,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLOR.primary,
    justifyContent: "center",
    alignItems: 'center',
  },
  doneText: {
    fontFamily: "Archivo-Bold",
    fontSize: 12,
    color: COLOR.black,
  }
});

export default Library;