import React, { useState } from "react";
import { Box, HStack, Icon, Image, Input, Pressable, Stack, Text, VStack } from "native-base";
import { ScrollView, StyleSheet, TouchableOpacity, Dimensions, Platform } from "react-native";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

// Icons
import InstagramSvg from "../../../../assets/icons/instagram.svg";
import SnapChatSvg from "../../../../assets/icons/snapchat.svg";
import TwitterSvg from "../../../../assets/icons/twitter.svg";
import FacebookSvg from "../../../../assets/icons/facebook.svg";
import RadioBtnSvg from "../../../../assets/icons/radiobtn.svg";
import ActiveRadioBtnSvg from "../../../../assets/icons/radiobtn_active.svg";
import CameraSvg from "../../../../assets/icons/camera.svg";

// Constants
import { COLOR } from "../../../constants/Color";

const { width } = Dimensions.get("window");

const SignupDetail = ({ navigation }) => {

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [gender, setGender] = useState(null);
  const [language, setLanguage] = useState(null);
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.black }}>
      <ScrollView flex={1}>
        <Stack marginTop={5} paddingLeft={"36px"} zIndex={99}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color={COLOR.white} />
          </TouchableOpacity>
        </Stack>
        <Box position="absolute" marginTop={5} width={width} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
          <Text style={styles.title}>
            Sign Up
          </Text>
        </Box>
        <VStack space={8} paddingX={"36px"} marginTop={16} marginBottom={8}>
          <Stack>
            <Text style={styles.label}>Name</Text>
            <Input
              w={"100%"} h={"35px"}
              borderRadius="30px"
              borderColor={"black"}
              backgroundColor={COLOR.darkGray1}
              color={COLOR.white}
              cursorColor={COLOR.white}
              overflow="hidden"
              fontSize={16}
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </Stack>
          <Stack>
            <Text style={styles.label}>Email</Text>
            <Input
              w={"100%"} h={"35px"}
              borderRadius="30px"
              color={COLOR.white}
              fontSize={16}
              borderColor={"black"}
              backgroundColor={COLOR.darkGray1}
              cursorColor={COLOR.white}
              overflow="hidden"
              type="text"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </Stack>
          <HStack width="100%" justifyContent="space-between">
            <Stack width="40%">
              <Text style={styles.label}>Country</Text>
              <Input
                w={"100%"} h={"35px"}
                borderRadius="30px"
                borderColor={"black"}
                backgroundColor={COLOR.darkGray1}
                color={COLOR.white}
                fontSize={16}
                cursorColor={COLOR.white}
                overflow="hidden"
                type="text"
                value={country}
                onChangeText={(text) => setCountry(text)}
              />
            </Stack>
            <Stack width="25%">
              <Text style={styles.label}>State</Text>
              <Input
                w={"100%"} h={"35px"}
                borderRadius="30px"
                borderColor={"black"}
                backgroundColor={COLOR.darkGray1}
                color={COLOR.white}
                fontSize={16}
                cursorColor={COLOR.white}
                overflow="hidden"
                type="text"
                value={state}
                onChangeText={(text) => setState(text)}
              />
            </Stack>
            <Stack width="34%">
              <Text style={styles.label}>City</Text>
              <Input
                w={"100%"} h={"35px"}
                borderRadius="30px"
                borderColor={"black"}
                backgroundColor={COLOR.darkGray1}
                color={COLOR.white}
                fontSize={16}
                cursorColor={COLOR.white}
                overflow="hidden"
                type="text"
                value={city}
                onChangeText={(text) => setCity(text)}
              />
            </Stack>
          </HStack>
          <Stack width="40%">
            <Text style={styles.label}>Gender</Text>
            <Input
              w={"100%"} h={"35px"}
              borderRadius="30px"
              borderColor={"black"}
              backgroundColor={COLOR.darkGray1}
              color={COLOR.white}
              fontSize={16}
              cursorColor={COLOR.white}
              overflow="hidden"
              type="text"
              value={gender}
              onChangeText={(text) => setGender(text)}
            />
          </Stack>
          <Stack width="100%">
            <Text style={styles.label}>Perferred Language</Text>
            <Input
              w={"40%"} h={"35px"}
              borderRadius="30px"
              borderColor={"black"}
              backgroundColor={COLOR.darkGray1}
              color={COLOR.white}
              fontSize={16}
              cursorColor={COLOR.white}
              overflow="hidden"
              type="text"
              value={language}
              onChangeText={(text) => setLanguage(text)}
            />
          </Stack>
          <Stack width="100%" space={4}>
            <Text style={styles.label}>
              Connect Social Media <Text textTransform="lowercase">{'(optional)'}</Text>
            </Text>
            <HStack width="100%" justifyContent="space-between">
              <VStack width="20%" alignItems="center">
                {Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/instagram.svg")} width="45px" height="45px" alt="instagram" />
                  : <InstagramSvg width="45px" height="45px" />
                }
                <Text style={styles.label1}>
                  Instagram
                </Text>
                <TouchableOpacity style={styles.connectBtn}>
                  <Text style={styles.connect}>Connect</Text>
                </TouchableOpacity>
              </VStack>
              <VStack width="20%" alignItems="center">
                {Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/snapchat.svg")} width="45px" height="45px" alt="instagram" />
                  : <SnapChatSvg width="45px" height="45px" />
                }
                <Text style={styles.label1}>
                  Snapchat
                </Text>
                <TouchableOpacity style={styles.connectBtn}>
                  <Text style={styles.connect}>Connect</Text>
                </TouchableOpacity>
              </VStack>
              <VStack width="20%" alignItems="center">
                {Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/twitter.svg")} width="45px" height="45px" alt="instagram" />
                  : <TwitterSvg width="45px" height="45px" />
                }
                <Text style={styles.label1}>
                  Twitter
                </Text>
                <TouchableOpacity style={styles.connectBtn}>
                  <Text style={styles.connect}>Connect</Text>
                </TouchableOpacity>
              </VStack>
              <VStack width="20%" alignItems="center">
                {Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/facebook.svg")} width="45px" height="45px" alt="instagram" />
                  : <FacebookSvg width="45px" height="45px" />
                }
                <Text style={styles.label1}>
                  Facebook
                </Text>
                <TouchableOpacity style={styles.connectBtn}>
                  <Text style={styles.connect}>Connect</Text>
                </TouchableOpacity>
              </VStack>
            </HStack>
          </Stack>
          <Stack space={1}>
            <Text style={styles.label}>ID Verification</Text>
            <HStack width="100%" justifyContent="space-between">
              <TouchableOpacity
                style={styles.card}
              >
                {Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/camera.svg")} width="40px" height="39px" alt="camera" />
                  : <CameraSvg width="40px" height="39px" />
                }
                <Text style={styles.text} numberOfLines={2}>
                  front side of your ID
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.card}
              >
                {Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/camera.svg")} width="40px" height="39px" alt="camera" />
                  : <CameraSvg width="40px" height="39px" />
                }
                <Text style={styles.text} numberOfLines={2}>
                  back side of your ID
                </Text>
              </TouchableOpacity>
            </HStack>
          </Stack>
          <TouchableOpacity onPress={() => setIsAccepted(!isAccepted)}>
            <HStack width="100%" alignItems="center" space={3}>
              {isAccepted ? (
                Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/radiobtn_active.svg")} width="18px" height="18px" />
                  : <ActiveRadioBtnSvg width="18px" height="18px" />
              ) : (
                Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/radiobtn.svg")} width="18px" height="18px" />
                  : <RadioBtnSvg width="18px" height="18px" />
              )}
              <Text style={styles.accept}>
                <Text color={COLOR.white}>I accept </Text>
                the terms of use and privacy policy
              </Text>
            </HStack>
          </TouchableOpacity>
          <Stack alignItems="center">
            <TouchableOpacity
              onPress={() => navigation.navigate("PayoutSetupScreen")}
              style={styles.submit}
            >
              <Text style={{ fontFamily: "Archivo-Bold", color: COLOR.black, textTransform: "uppercase" }}>
                Next
              </Text>
            </TouchableOpacity>
          </Stack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Archivo-SemiBold",
    color: COLOR.white,
    fontSize: 14,
    textTransform: "uppercase",
  },
  text: {
    fontFamily: "Archivo",
    color: COLOR.lightGray3,
    fontSize: 13,
  },
  accept: {
    fontFamily: "Archivo",
    color: COLOR.lightGray3,
    fontSize: 13,
  },
  card: {
    width: "48%",
    height: 143,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: COLOR.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  label: {
    fontFamily: "Archivo",
    fontSize: 12,
    color: COLOR.primary,
    textTransform: "uppercase"
  },
  label1: {
    fontFamily: "Archivo",
    fontSize: 10,
    color: COLOR.primary,
    textTransform: "uppercase"
  },
  connectBtn: {
    marginTop: 6,
    width: 55,
    height: 20,
    borderWidth: 1,
    borderColor: COLOR.primary,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center"
  },
  connect: {
    fontFamily: "Archivo",
    fontSize: 10,
    color: COLOR.primary,
    lineHeight: 10,
  },
  submit: {
    width: 164,
    height: 63,
    borderRadius: 38,
    borderWidth: 1,
    backgroundColor: COLOR.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default SignupDetail;