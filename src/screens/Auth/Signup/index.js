import React, { useState } from "react";
import { Box, HStack, Icon, Input, Pressable, Stack, Text, VStack } from "native-base";
import { ScrollView, StyleSheet, TouchableOpacity, Dimensions, Alert } from "react-native";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

// Constants
import { COLOR } from "../../../constants/Color";

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
    navigation.navigate("SignUpDetailScreen")
  }

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
        <Stack alignItems="center" marginTop={16} marginBottom={8}>
          <Text style={styles.text}>
            Are You A
          </Text>
        </Stack>
        <HStack justifyContent="space-between" alignItems="center" paddingX={"36px"}>
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
          <TouchableOpacity
            onPress={() => setSelectedCard("listener")}
            style={selectedCard === "listener" ? styles.selectedCard : styles.card}
          >
            <Text style={styles.text} numberOfLines={2}>
              Listener
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedCard("podcaster")}
            style={selectedCard === "podcaster" ? styles.selectedCard : styles.card}
          >
            <Text style={styles.text} numberOfLines={2}>
              Podcaster
            </Text>
          </TouchableOpacity>
        </HStack>
        <VStack space={10} paddingX={"36px"} marginTop={8} marginBottom={8}>
          <Stack>
            <Text style={styles.label}>Username</Text>
            <Input
              w={"100%"} h={"35px"}
              borderRadius="30px"
              borderColor={"black"}
              backgroundColor={COLOR.darkGray1}
              color={COLOR.white}
              cursorColor={COLOR.white}
              overflow="hidden"
              fontSize={16}
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </Stack>
          <Stack>
            <Text style={styles.label}>Password</Text>
            <Input
              w={"100%"} h={"35px"}
              borderRadius="30px"
              color={COLOR.white}
              fontSize={16}
              borderColor={"black"}
              backgroundColor={COLOR.darkGray1}
              cursorColor={COLOR.white}
              overflow="hidden"
              type={showPass ? "text" : "password"}
              InputRightElement={
                password ?
                  <Pressable onPress={() => setShowPass(!showPass)}>
                    <Icon as={<MaterialIcons name={showPass ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted" />
                  </Pressable>
                  : <></>
              }
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </Stack>
          <Stack>
            <Text style={styles.label}>Password Confirmation</Text>
            <Input
              w={"100%"} h={"35px"}
              borderRadius="30px"
              borderColor={"black"}
              backgroundColor={COLOR.darkGray1}
              color={COLOR.white}
              fontSize={16}
              cursorColor={COLOR.white}
              overflow="hidden"
              type={showPass ? "text" : "password"}
              InputRightElement={
                confirmPass ?
                  <Pressable onPress={() => setShowPass(!showPass)}>
                    <Icon as={<MaterialIcons name={showPass ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted" />
                  </Pressable>
                  : <></>
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
              Next
            </Text>
          </TouchableOpacity>
        </Stack>
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
    fontFamily: "Archivo-SemiBold",
    color: COLOR.white,
    textTransform: "uppercase"
  },
  card: {
    width: "31%",
    height: 119,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: COLOR.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  selectedCard: {
    width: "31%",
    height: 119,
    borderRadius: 9,
    backgroundColor: COLOR.yellow,
    alignItems: "center",
    justifyContent: "center"
  },
  label: {
    fontFamily: "Archivo",
    fontSize: 12,
    color: COLOR.primary,
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