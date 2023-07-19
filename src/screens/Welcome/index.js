import React from "react";
import { Box, Image, Stack, VStack, Text } from "native-base";
import { Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import { COLOR } from "../../constants/Color";

const { width, height } = Dimensions.get("window");

const Welcome = ({ navigation }) => {
  return (
    <Swiper
      horizontal={false}
      loop={false}
      showsPagination={false}
      index={0}
    >
      <Box flex={1} backgroundColor={COLOR.black}>
        <Stack marginTop={height * 3 / 7}>
          <Text
            fontFamily={'Archivo'}
            textTransform={'uppercase'}
            color={COLOR.white}
            fontSize={16}
            letterSpacing={10}
            textAlign={"center"}
          >
            Welcome to 88K
          </Text>
          <Text
            fontFamily={'Archivo'}
            textTransform={'capitalize'}
            color={COLOR.white}
            fontSize={10}
            letterSpacing={4}
            marginTop={"20px"}
            textAlign={"center"}
          >
            Where Magic Begins...
          </Text>
        </Stack>
        <Stack position={"absolute"} width={width} bottom={"1/5"} alignItems={"center"}>
          <TouchableOpacity>
            <SimpleLineIcons name="arrow-up" size={16} color={COLOR.gray2} />
            <SimpleLineIcons name="arrow-up" size={16} color={COLOR.gray2} style={{ marginTop: -8 }} />
          </TouchableOpacity>
        </Stack>
        <Stack position={"absolute"} width={width} bottom={-80} alignItems={"center"}>
          <Image source={require("../../../assets/logo.png")} alt="logo" resizeMode="contain" />
        </Stack>
      </Box>
      <Box flex={1} backgroundColor={COLOR.black}>
        <Stack width={width} marginTop={"1/5"} alignItems={"center"}>
          <Image source={require("../../../assets/logo.png")} alt="logo" resizeMode="contain" />
        </Stack>
        <VStack space={8} marginTop={"1/2"} alignItems={"center"}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignInScreen")}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUpScreen")}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>
        </VStack>
      </Box>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 164,
    height: 63,
    borderRadius: 38,
    borderWidth: 1,
    borderColor: "#F8F8F8",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontFamily: "Archivo-SemiBold",
    color: COLOR.white,
    textTransform: "uppercase"
  }
});

export default Welcome;