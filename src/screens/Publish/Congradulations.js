import React from "react";
import { HStack, Text, VStack, Image, Center } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import Footer from "../../components/Footer";

// Constants
import { COLOR } from "../../constants/Color";

const Congradulations = ({ navigation }) => {

  return (
    <>
      <SafeAreaView style={styles.container}>
        <VStack flex={1} justifyContent="center" alignItems="center" px="23px" space={16}>
          <Center>
            <Text style={styles.title}>
              Congradulations!
            </Text>
            <Text style={styles.text}>
              Your music has successfully published on
            </Text>
            <Text style={styles.text}>
              selected platforms!
            </Text>
          </Center>
          <VStack width="100%" space={2}>
            <HStack style={styles.box}>
              <Image source={require("../../../assets/images/logos/88K_Logo.png")} width="65px" height="30px" alt="88k" />
              <TouchableOpacity style={styles.shareBtn}>
                <Text fontFamily="Archivo-Bold" fontSize={10} color={COLOR.black}>share</Text>
              </TouchableOpacity>
            </HStack>
            <HStack style={styles.box}>
              <Image source={require("../../../assets/images/logos/Spotify_Logo.png")} width="118px" height="35px" alt="88k" />
              <TouchableOpacity style={styles.shareBtn}>
                <Text fontFamily="Archivo-Bold" fontSize={10} color={COLOR.black}>share</Text>
              </TouchableOpacity>
            </HStack>
            <HStack style={styles.box}>
              <Image source={require("../../../assets/images/logos/Amazon_Music_Logo.png")} width="131px" height="43px" alt="88k" />
              <TouchableOpacity style={styles.shareBtn}>
                <Text fontFamily="Archivo-Bold" fontSize={10} color={COLOR.black}>share</Text>
              </TouchableOpacity>
            </HStack>
          </VStack>
          <HStack width="100%" justifyContent="center">
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={styles.button}>
              <Text style={styles.buttonText}>Back to home</Text>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </SafeAreaView>
      <Footer navigation={navigation} routeName={"PublishScreen"} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.black,
    width: "100%",
  },
  title: {
    fontFamily: "Archivo-Bold",
    fontSize: 26,
    color: COLOR.white,
    lineHeight: 26,
    textTransform: "uppercase",
    marginBottom: 25,
  },
  text: {
    fontFamily: "Archivo-Thin",
    fontSize: 12,
    color: COLOR.white,
    lineHeight: 16,
  },
  box: {
    width: "100%",
    height: 60,
    backgroundColor: COLOR.darkGray2,
    borderRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  shareBtn: {
    width: 55,
    height: 22,
    borderRadius: 6,
    backgroundColor: COLOR.white,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 182,
    height: 38,
    borderRadius: 19,
    backgroundColor: COLOR.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "Archivo-Bold",
    fontSize: 12,
    color: COLOR.black,
  }
});

export default Congradulations;