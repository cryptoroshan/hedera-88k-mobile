import React, { useState } from "react";
import { Box, HStack, Input, Text, VStack } from "native-base";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";

// Constants
import { COLOR } from "../../constants/Color";

// Components
import Footer from "../../components/Footer";

const searchHistory = [
  {
    id: 1,
    name: "Miley Cyrus",
    title: "Flowers"
  },
  {
    id: 2,
    name: "Miley Cyrus",
    title: "Flowers"
  },
  {
    id: 3,
    name: "Miley Cyrus",
    title: "Flowers"
  },
  {
    id: 4,
    name: "Miley Cyrus",
    title: "Flowers"
  },
  {
    id: 5,
    name: "Miley Cyrus",
    title: "Flowers"
  },
]

const SearchExplore = ({ navigation }) => {

  const [searchText, setSearchText] = useState(null);

  return (
    <SafeAreaView
      flex={1}
      width="100%"
      backgroundColor={COLOR.black}
    >
      <ScrollView flex={1}>
        {/* Header */}
        <HStack justifyContent="space-between" alignItems="center" paddingX="30px" marginTop={5} space={3}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color={COLOR.primary} />
          </TouchableOpacity>
          <Input
            InputLeftElement={<Feather name="search" style={{ marginLeft: 10 }} size={22} color={COLOR.black} />}
            backgroundColor={COLOR.primary}
            width="85%"
            height={43}
            fontFamily="Archivo"
            fontSize={14}
            placeholder="Search anything"
            placeholderTextColor={COLOR.black}
            // autoFocus={true}
            style={{ paddingLeft: 8 }}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </HStack>
        <Text style={styles.historyText}>Search History</Text>
        <VStack space={3} marginLeft="42px" marginRight="36px">
          {
            searchHistory.map((item, index) =>
              <HStack justifyContent="space-between" alignItems="center" key={index}>
                <HStack space={2}>
                  <Box style={styles.avatar} />
                  <VStack justifyContent="space-between" paddingY="5px">
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.name}>{item.name}</Text>
                  </VStack>
                </HStack>
                <HStack space={4} alignItems="center">
                  <TouchableOpacity>
                    <Entypo name="dots-three-horizontal" size={20} color={COLOR.primary} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <AntDesign name="close" size={20} color={COLOR.primary} />
                  </TouchableOpacity>
                </HStack>
              </HStack>
            )
          }
        </VStack>
      </ScrollView>
      <Footer navigation={navigation} routeName={"HomeScreen"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  historyText: {
    fontFamily: "Archivo-Bold",
    textTransform: "uppercase",
    fontSize: 12,
    color: COLOR.primary,
    lineHeight: 30,
    marginLeft: 42,
    marginTop: 16,
    marginBottom: 7,
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
});

export default SearchExplore;