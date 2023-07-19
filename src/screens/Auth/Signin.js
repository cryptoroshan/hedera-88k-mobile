import React, { useState } from "react";
import { Box, Stack, Text, VStack, Input, Pressable, Icon } from "native-base";
import { StyleSheet, TouchableOpacity, ScrollView, Dimensions, Alert } from "react-native";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from 'react-redux';

import { setUsername } from '../../actions/user';
import { postRequest } from "../../components/apiRequests";
import * as env from "../../../env";

// Constants
import { COLOR } from "../../constants/Color";

const { width } = Dimensions.get("window");

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();

  const [showPass, setShowPass] = useState(false);
  const [user_name, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const onHandleSignin = async () => {
    const _postData = {
        username: user_name,
        password: password
    };
    console.log(env.SERVER_URL)
    const _res = await postRequest(env.SERVER_URL + "/api/auth/signin", _postData);
    if (!_res) {
        Alert.alert("Error", "Something wrong with server!");
        return;
    }
    if (!_res.result) {
        Alert.alert("Error", _res.error);
        return;
    }
    dispatch(setUsername(user_name));
    navigation.navigate("HomeScreen");
  }

  return (
    <SafeAreaView flex={1} backgroundColor={COLOR.black}>
      <ScrollView flex={1}>
        <Stack marginTop={5} paddingLeft={"36px"}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color={COLOR.white} />
          </TouchableOpacity>
          <Box position="absolute" width={width} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
            <Text style={styles.text}>
              Sign In
            </Text>
          </Box>
        </Stack>
        <VStack space={10} paddingX={"36px"} marginTop={"3/5"} marginBottom={8}>
          <Stack>
            <Text style={styles.label}>username</Text>
            <Input
              w={"100%"} h={"35px"}
              borderColor={"black"}
              backgroundColor={"rgba(248, 248, 248, 0.60)"}
              color={COLOR.white}
              fontSize={16}
              type="text"
              value={user_name}
              onChangeText={(text) => setUserName(text)}
            />
          </Stack>
          <Stack>
            <Text style={styles.label}>password</Text>
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
          <Stack alignItems="center" marginTop={20}>
            <TouchableOpacity
              onPress={() => onHandleSignin()}
              style={styles.submit}
            >
              <Text style={{ fontFamily: "Archivo-Bold", color: COLOR.black, textTransform: "uppercase" }}>
                Let's Begin
              </Text>
            </TouchableOpacity>
          </Stack>
        </VStack>
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
    justifyContent: 'center'
  }
})

export default SignIn;