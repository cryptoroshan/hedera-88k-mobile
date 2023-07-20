import React, { useState } from "react";
import { Box, HStack, Icon, Input, Pressable, Stack, Text, VStack } from "native-base";
import { ScrollView, StyleSheet, TouchableOpacity, Dimensions, Alert } from "react-native";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

import { postRequest } from "../../components/apiRequests";
import * as env from "../../../env";

// Constants
import { COLOR } from "../../constants/Color";

const { width } = Dimensions.get("window");

const SignUp = ({ navigation }) => {

  const [selectedCard, setSelectedCard] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);
  const [showPass, setShowPass] = useState(false);

  const onHandleSignup = async () => {
    const _postData = {
        username: username,
        password: password
    };
    const _res = await postRequest(env.SERVER_URL + "/api/auth/signup", _postData);
    if (!_res) {
        Alert.alert("Error", "Something wrong with server!");
        return;
    }
    if (!_res.result) {
        Alert.alert("Error", _res.error);
        return;
    }
    navigation.navigate("SignInScreen");
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.black }}>
      <ScrollView flex={1}>
        <Stack marginTop={5} paddingLeft={"36px"}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color={COLOR.white} />
          </TouchableOpacity>
          <Box position="absolute" width={width} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
            <Text style={styles.text}>
              Sign Up
            </Text>
          </Box>
        </Stack>
        <Stack alignItems="center" marginTop={10} marginBottom={8}>
          <Text style={styles.text}>
            Are You A
          </Text>
        </Stack>
        <HStack justifyContent="center" alignItems="center" space={3}>
          <TouchableOpacity
            onPress={() => setSelectedCard("creator")}
            style={selectedCard === "creator" ? styles.selectedCard : styles.card}
          >
            <Text style={styles.text}>
              Music
            </Text>
            <Text style={styles.text}>
              Creator
            </Text>
          </TouchableOpacity>
          <Text style={{ ...styles.text, fontSize: 10 }}>
            Or
          </Text>
          <TouchableOpacity
            onPress={() => setSelectedCard("fan")}
            style={selectedCard === "fan" ? styles.selectedCard : styles.card}
          >
            <Text style={styles.text}>
              Music
            </Text>
            <Text style={styles.text}>
              Fan
            </Text>
          </TouchableOpacity>
        </HStack>
        <VStack space={10} paddingX={"36px"} marginTop={8} marginBottom={8}>
          <Stack>
            <Text style={styles.label}>Username</Text>
            <Input
              w={"100%"} h={"35px"}
              borderColor={"black"}
              backgroundColor={"rgba(248, 248, 248, 0.60)"}
              color={COLOR.white}
              fontSize={16}
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </Stack>
          <Stack>
            <Text style={styles.label}>Password</Text>
            <Input
              w={"100%"} h={"35px"}
              color={COLOR.white}
              fontSize={16}
              borderColor={"black"}
              backgroundColor={"rgba(248, 248, 248, 0.60)"}
              type={showPass ? "text" : "password"}
              InputRightElement={
                <Pressable onPress={() => setShowPass(!showPass)}>
                  <Icon as={<MaterialIcons name={showPass ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted" />
                </Pressable>
              }
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </Stack>
          <Stack>
            <Text style={styles.label}>Confirm Password</Text>
            <Input
              w={"100%"} h={"35px"}
              borderColor={"black"}
              backgroundColor={"rgba(248, 248, 248, 0.60)"}
              color={COLOR.white}
              fontSize={16}
              type={showPass ? "text" : "password"}
              InputRightElement={
                <Pressable onPress={() => setShowPass(!showPass)}>
                  <Icon as={<MaterialIcons name={showPass ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted" />
                </Pressable>
              }
              value={confirmPass}
              onChangeText={(text) => setConfirmPass(text)}
            />
          </Stack>
        </VStack>
        <Stack alignItems="center" marginTop={20}>
          <TouchableOpacity
            onPress={() => onHandleSignup()}
            style={styles.submit}
          >
            <Text style={{ fontFamily: "Archivo-Bold", color: COLOR.black, textTransform: "uppercase" }}>
              Let's Begin
            </Text>
          </TouchableOpacity>
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Archivo-SemiBold",
    color: COLOR.white,
    textTransform: "uppercase"
  },
  card: {
    width: 119,
    height: 119,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: COLOR.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  selectedCard: {
    width: 119,
    height: 119,
    borderRadius: 9,
    backgroundColor: COLOR.yellow,
    alignItems: "center",
    justifyContent: "center"
  },
  label: {
    fontFamily: "Archivo",
    color: COLOR.gray,
    textTransform: "uppercase"
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

export default SignUp;
