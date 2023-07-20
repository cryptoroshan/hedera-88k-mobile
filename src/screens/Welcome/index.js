import React from "react";
import { Box, Image, Stack, VStack, Text } from "native-base";
import { Dimensions, TouchableOpacity, StyleSheet, FlatList, Animated, Platform } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { COLOR } from "../../constants/Color";

const { width, height } = Dimensions.get("window");

const pages = [
  { id: 1, title: "Welcome 1" },
  { id: 2, title: "Welcome 2" }
];

const Welcome = ({ navigation }) => {
  console.log("Platform.OS===", Platform.OS);

  return (
    <Animated.View style={{ flex: 1, backgroundColor: COLOR.black, justifyContent: 'center' }}>
      {Platform.OS === "web" ?
        <>
          <Stack>
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
          <VStack space={8} marginTop={"1/5"} alignItems={"center"}>
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
        </>
        :
        <FlatList
          data={pages}
          pagingEnabled
          initialNumToRender={1}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            if (item.title === "Welcome 1") {
              return (
                <Box flex={1} height={height}>
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
                </Box>
              );
            } else {
              return (
                <Box flex={1} height={height}>
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
              )
            }
          }}
        />
      }
    </Animated.View>
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