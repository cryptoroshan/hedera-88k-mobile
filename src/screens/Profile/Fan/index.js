import React from "react";
import { Avatar, Box, Center, FlatList, HStack, Text, VStack, View } from "native-base";
import { TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo } from "@expo/vector-icons";

import { COLOR } from "../../../constants/Color";
import { PopularData } from "../../../constants/static";

const FanProfile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.leftBtn}>
        <AntDesign name="left" size={20} color={COLOR.white} />
      </TouchableOpacity>
      <Box width="100%" alignItems={"center"} marginTop={2}>
        <Text style={styles.title}>
          Account
        </Text>
        <Avatar alignSelf="center" size="xl" marginTop={8} source={{
          uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }} />
        <Text style={styles.name}>
          Billie Eilish
        </Text>
        <TouchableOpacity>
          <Text style={styles.editProfile}>
            Edit Profile
          </Text>
        </TouchableOpacity>
        <HStack marginTop={5}>
          <HStack w={"1/2"} justifyContent="flex-end" paddingRight={4}>
            <Center>
              <Text style={styles.contentText}>
                88
              </Text>
              <Text style={styles.contentText}>
                Your Creations
              </Text>
            </Center>
          </HStack>
          <HStack w={"1/2"} justifyContent="flex-start" paddingLeft={4}>
            <Center>
              <Text style={styles.contentText}>
                88
              </Text>
              <Text style={styles.contentText}>
                Global Creations
              </Text>
            </Center>
          </HStack>
        </HStack>
        <Box w="100%" paddingX="40px" marginTop={8}>
          <HStack w="full" justifyContent="flex-start">
            <Text style={styles.popular}>Popular</Text>
          </HStack>
          <FlatList
            data={PopularData}
            renderItem={({ item, index }) =>
              <HStack w="full" justifyContent="space-between" alignItems="center" marginBottom={5} key={index}>
                <HStack space={3} alignItems="center">
                  <Text color={COLOR.white} fontFamily="Archivo-Medium">1</Text>
                  <View style={styles.card} />
                  <VStack justifyContent="space-between" marginLeft={2}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.streamNumber}>{item.streams}</Text>
                  </VStack>
                </HStack>
                <TouchableOpacity>
                  <Entypo name="dots-three-horizontal" size={20} color={COLOR.white} />
                </TouchableOpacity>
              </HStack>
            }
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.black
  },
  leftBtn: {
    position: "absolute",
    paddingLeft: 36,
    marginTop: 65
  },
  title: {
    fontFamily: "Archivo-SemiBold",
    color: COLOR.white,
    fontSize: 13,
    textTransform: "uppercase"
  },
  name: {
    fontFamily: "Archivo-SemiBold",
    color: COLOR.white,
    fontSize: 13,
    lineHeight: 22,
    textTransform: 'capitalize',
    marginTop: 11
  },
  editProfile: {
    fontFamily: "Archivo",
    color: "#ffffff99",
    fontSize: 8,
    textTransform: "uppercase"
  },
  contentText: {
    fontFamily: "Archivo-SemiBold",
    color: COLOR.white,
    fontSize: 13,
  },
  popular: {
    fontFamily: "Archivo-Bold",
    color: COLOR.white,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 13
  },
  card: {
    width: 48,
    height: 48,
    borderRadius: 5,
    backgroundColor: "#D9D9D9"
  },
  cardTitle: {
    fontFamily: "Archivo-Medium",
    color: COLOR.white,
    fontSize: 15,
    textTransform: "uppercase",
    letterSpacing: -0.5
  },
  streamNumber: {
    fontFamily: "Archivo-Thin",
    color: COLOR.white,
    fontSize: 10,
    letterSpacing: -0.5
  }
});

export default FanProfile;