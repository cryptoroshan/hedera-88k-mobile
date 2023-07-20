import React, { useState } from "react";
import { Box, HStack, Icon, Image, Input, Pressable, Stack, Text, TextArea, VStack } from "native-base";
import { ScrollView, StyleSheet, TouchableOpacity, Dimensions, Platform } from "react-native";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

// Icons
import ArrowRightSvg from "../../../../assets/icons/arrow-right.svg";
import ArrowDownSvg from "../../../../assets/icons/arrow-down.svg";

// Constants
import { COLOR } from "../../../constants/Color";

const { width } = Dimensions.get("window");

const WireTransfer = ({ navigation }) => {

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [number, setNumber] = useState(null);
  const [bankName, setBankName] = useState(null);
  const [bankAddress, setBankAddress] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.black }}>
      <ScrollView flex={1}>
        <Stack mt={5} pl={"20px"} zIndex={99}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color={COLOR.white} />
          </TouchableOpacity>
        </Stack>
        <HStack position="absolute" mt={5} width={width} alignItems={"center"} justifyContent={"center"}>
          <Text style={styles.title}>
            Add payout method
          </Text>
        </HStack>
        <Stack mt={12} pl="31px">
          <Text style={styles.text}>
            Enter wire transfer information
          </Text>
        </Stack>
        <VStack space={3} px={"31px"} mt={5}>
          <Stack width="50%">
            <Text style={styles.label}>First Name</Text>
            <Input
              style={styles.input}
              px="5px" py="3px"
              borderColor={COLOR.black}
              backgroundColor={COLOR.darkGray3}
              cursorColor={COLOR.white}
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />
          </Stack>
          <Stack width="50%">
            <Text style={styles.label}>Last Name</Text>
            <Input
              style={styles.input}
              px="5px" py="3px"
              borderColor={COLOR.black}
              backgroundColor={COLOR.darkGray3}
              cursorColor={COLOR.white}
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />
          </Stack>
          <Stack width="100%">
            <Text style={styles.label}>{'Routing Number / SWIFT / BIC code'}</Text>
            <Input
              style={styles.input}
              px="5px" py="3px"
              borderColor={COLOR.black}
              backgroundColor={COLOR.darkGray3}
              cursorColor={COLOR.white}
              value={number}
              onChangeText={(text) => setNumber(text)}
            />
          </Stack>
          <Stack width="50%">
            <Text style={styles.label}>Bank Name</Text>
            <Input
              style={styles.input}
              px="5px" py="3px"
              borderColor={COLOR.black}
              backgroundColor={COLOR.darkGray3}
              cursorColor={COLOR.white}
              value={bankName}
              onChangeText={(text) => setBankName(text)}
            />
          </Stack>
          <Stack width="100%">
            <Text style={styles.label}>Bank Address</Text>
            <TextArea
              w="100%" h={24}
              borderColor={COLOR.black}
              backgroundColor={COLOR.darkGray3}
              borderRadius="3px"
              cursorColor={COLOR.white}
              fontFamily="Archivo"
              color={COLOR.white}
              fontSize={12}
              value={bankAddress}
              onChangeText={(text) => setBankAddress(text)}
            />
          </Stack>
        </VStack>
        <Stack alignItems="center" mt={8} mb={4}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.submit}
          >
            <Text style={{ fontFamily: "Archivo-Bold", color: COLOR.black, fontSize: 12 }}>
              Save wire info
            </Text>
          </TouchableOpacity>
        </Stack>
      </ScrollView>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Archivo-SemiBold",
    color: COLOR.white,
    fontSize: 14,
  },
  text: {
    fontFamily: "Archivo-SemiBold",
    color: COLOR.white,
    fontSize: 12,
    lineHeight: 22,
  },
  label: {
    fontFamily: "Archivo",
    fontSize: 12,
    color: COLOR.white,
  },
  input: {
    width: "100%",
    height: 30,
    borderRadius: 3,
    color: COLOR.white,
    overflow: "hidden",
    fontFamily: "Archivo",
    letterSpacing: 0.3,
    fontSize: 12
  },
  submit: {
    width: 145,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    backgroundColor: COLOR.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default WireTransfer;