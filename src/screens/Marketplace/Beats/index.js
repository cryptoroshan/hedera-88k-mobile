import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Avatar, Box, FlatList, HStack, Text, VStack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

// Icons
import { AntDesign, Feather } from "@expo/vector-icons";

// Contants
import { COLOR } from "../../../constants/Color";
import { allFilterList, BeatsData } from "../../../constants/static";

// Components
import Footer from "../../../components/Footer";

const { width, height } = Dimensions.get("window");

const SortList = [
  {
    id: 1,
    name: "Name"
  },
  {
    id: 2,
    name: "Popularity"
  },
  {
    id: 3,
    name: "A-Z"
  },
  {
    id: 4,
    name: "Z-A"
  }
];

const Beats = ({ navigation }) => {

  const [selectedFilterItem, setSelectedFilterItem] = useState(null);
  const [isSortOpened, setIsSortOpened] = useState(false);
  const [sortItem, setSortItem] = useState(SortList[0]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView flex={1}>
        {/* Header */}
        <Box width="100%" paddingTop="30px">
          <HStack width="100%" paddingX="22px" justifyContent="space-between" alignItems="center">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={20} color={COLOR.white} />
            </TouchableOpacity>
            <Text style={styles.title}>All Beat Producers</Text>
            <TouchableOpacity>
              <Feather name="search" size={20} color={COLOR.white} />
            </TouchableOpacity>
          </HStack>
          <FlatList
            data={allFilterList}
            horizontal
            style={{ paddingVertical: 20 }}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity key={index} onPress={() => setSelectedFilterItem(item)}
                  style={{
                    ...styles.filterItem,
                    backgroundColor: item.id === selectedFilterItem?.id ? COLOR.primary : COLOR.lightGray2,
                    marginLeft: index === 0 ? 15 : 7,
                    marginRight: index === allFilterList.length - 1 ? 15 : 0,
                  }}
                >
                  <Text fontFamily="Archivo-SemiBold" fontSize={14}
                    color={item.id === selectedFilterItem?.id ? COLOR.black : COLOR.primary}
                  >{item.name}</Text>
                </TouchableOpacity>
              )
            }}
          />
          <HStack justifyContent="center">
            <TouchableOpacity onPress={() => setIsSortOpened(true)}>
              {
                !isSortOpened ?
                  <AntDesign name="caretdown" size={11} color={COLOR.white} />
                  :
                  <AntDesign name="caretright" size={11} color={COLOR.white} />
              }
            </TouchableOpacity>
            <HStack justifyContent="flex-start" minWidth="45px" marginLeft="5px">
              {
                !isSortOpened ?
                  <TouchableOpacity onPress={() => setIsSortOpened(true)}>
                    <Text color={COLOR.white} fontSize={10}>
                      {sortItem.name}
                    </Text>
                  </TouchableOpacity>
                  :
                  <VStack>
                    {
                      SortList.map((item, index) =>
                        <TouchableOpacity key={index}
                          onPress={() => {
                            setSortItem(item);
                            setIsSortOpened(false);
                          }}
                        >
                          <Text color={COLOR.white} fontSize={10}>
                            {item.name}
                          </Text>
                        </TouchableOpacity>
                      )
                    }
                  </VStack>
              }
            </HStack>
          </HStack>
          <VStack space={3} paddingX="22px" marginTop="8px">
            {
              BeatsData.map((item, index) =>
                <HStack justifyContent="space-between" key={index}>
                  <HStack alignItems="center" space={3}>
                    <Avatar size={65} source={{ uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" }} />
                    <Text fontFamily="Archivo-Medium" color={COLOR.white} fontSize={15}>
                      {item.name}
                    </Text>
                  </HStack>
                  <HStack alignItems="center" space={2}>
                    <TouchableOpacity style={styles.mainBtn}>
                      <Text fontFamily="Archivo-Bold" color={COLOR.black} fontSize={10}>
                        Connect
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainBtn}>
                      <Text fontFamily="Archivo-Bold" color={COLOR.black} fontSize={10}>
                        Download
                      </Text>
                    </TouchableOpacity>
                  </HStack>
                </HStack>
              )
            }
          </VStack>
        </Box>
      </ScrollView>
      <Footer navigation={navigation} routeName={"HomeScreen"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.black,
  },
  title: {
    fontFamily: "Archivo-SemiBold",
    color: COLOR.white,
    fontSize: 13,
    textTransform: "capitalize"
  },
  filterItem: {
    minWidth: (width - 50) / 4,
    height: 34,
    borderRadius: 20,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBtn: {
    height: 32,
    borderRadius: 20,
    paddingHorizontal: 12,
    backgroundColor: COLOR.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Beats;