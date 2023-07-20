import React, { useState } from "react";
import { Box, HStack, Icon, Image, Input, Pressable, Stack, Text, VStack } from "native-base";
import { ScrollView, StyleSheet, TouchableOpacity, Dimensions, Platform } from "react-native";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

// Icons
import ArrowRightSvg from "../../../../assets/icons/arrow-right.svg";
import ArrowDownSvg from "../../../../assets/icons/arrow-down.svg";

// Constants
import { COLOR } from "../../../constants/Color";

const { width } = Dimensions.get("window");

const DebitCard = ({ navigation }) => {

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [cardNumber, setCardNumber] = useState(null);
  const [expireDate, setExpireDate] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [country, setCountry] = useState(null);
  const [company, setCompany] = useState(null);
  const [address1, setAddress1] = useState(null);
  const [address2, setAddress2] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [postalCode, setPostalCode] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

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
            Enter debit card information
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
            <Text style={styles.label}>Card Number</Text>
            <Input
              style={styles.input}
              px="5px" py="3px"
              borderColor={COLOR.black}
              backgroundColor={COLOR.darkGray3}
              cursorColor={COLOR.white}
              value={cardNumber}
              onChangeText={(text) => setCardNumber(text)}
            />
          </Stack>
          <HStack width="100%" justifyContent="space-between">
            <Stack width="48%">
              <Text style={styles.label}>Expiration Date</Text>
              <Input
                style={styles.input}
                px="5px" py="3px"
                borderColor={COLOR.black}
                backgroundColor={COLOR.darkGray3}
                cursorColor={COLOR.white}
                placeholder="MM/DD/YYYY"
                value={expireDate}
                onChangeText={(text) => setExpireDate(text)}
              />
            </Stack>
            <Stack width="40%">
              <Text style={styles.label}>CVV</Text>
              <Input
                style={styles.input}
                px="5px" py="3px"
                borderColor={COLOR.black}
                backgroundColor={COLOR.darkGray3}
                cursorColor={COLOR.white}
                value={cvv}
                onChangeText={(text) => setCvv(text)}
              />
            </Stack>
          </HStack>
        </VStack>
        <Stack mt={10} pl="31px">
          <Text style={styles.text}>
            Enter Billing information
          </Text>
        </Stack>
        <VStack space={3} px={"31px"} mt={5}>
          <Stack width="50%">
            <Text style={styles.label}>Country</Text>
            <Input
              w={"100%"} h={"25px"}
              borderRadius="30px"
              borderColor={"white"}
              color={COLOR.white}
              cursorColor={COLOR.white}
              overflow="hidden"
              fontSize={12}
              InputRightElement={
                <Stack mr={2}>
                  {Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/arrow-down.svg")} width="8px" height="6px" alt="arrow-down" />
                    : <ArrowDownSvg width="8px" height="6px" />
                  }
                </Stack>
              }
              value={country}
              onChange={(text) => setCountry(text)}
            />
          </Stack>
          <Stack width="100%">
            <Text style={styles.label}>Company Name</Text>
            <Input
              style={styles.input}
              px="5px" py="3px"
              borderColor={COLOR.black}
              backgroundColor={COLOR.darkGray3}
              cursorColor={COLOR.white}
              placeholder="Optional"
              value={company}
              onChangeText={(text) => setCompany(text)}
            />
          </Stack>
          <Stack width="100%">
            <Text style={styles.label}>Billing Address</Text>
            <Input
              style={styles.input}
              px="5px" py="3px"
              borderColor={COLOR.black}
              backgroundColor={COLOR.darkGray3}
              cursorColor={COLOR.white}
              placeholder="Address line 1"
              value={address1}
              onChangeText={(text) => setAddress1(text)}
            />
            <Input
              w={"100%"} h={"30px"} px="5px" py="3px" mt={1}
              borderRadius="3px"
              borderColor={"black"}
              backgroundColor={COLOR.darkGray3}
              color={COLOR.white}
              cursorColor={COLOR.white}
              overflow="hidden"
              fontFamily="Archivo"
              letterSpacing={0.3}
              fontSize={12}
              placeholder="Address line 2"
              value={address2}
              onChangeText={(text) => setAddress2(text)}
            />
          </Stack>
          <Stack width="50%">
            <Text style={styles.label}>City</Text>
            <Input
              w={"100%"} h={"25px"}
              borderRadius="30px"
              borderColor={"white"}
              color={COLOR.white}
              cursorColor={COLOR.white}
              overflow="hidden"
              fontSize={12}
              InputRightElement={
                <Stack mr={2}>
                  {Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/arrow-down.svg")} width="8px" height="6px" alt="arrow-down" />
                    : <ArrowDownSvg width="8px" height="6px" />
                  }
                </Stack>
              }
              value={city}
              onChange={(text) => setCity(text)}
            />
          </Stack>
          <Stack width="30%">
            <Text style={styles.label}>State</Text>
            <Input
              w={"100%"} h={"25px"}
              borderRadius="30px"
              borderColor={"white"}
              color={COLOR.white}
              cursorColor={COLOR.white}
              overflow="hidden"
              fontSize={12}
              InputRightElement={
                <Stack mr={2}>
                  {Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/arrow-down.svg")} width="8px" height="6px" alt="arrow-down" />
                    : <ArrowDownSvg width="8px" height="6px" />
                  }
                </Stack>
              }
              value={state}
              onChange={(text) => setState(text)}
            />
          </Stack>
          <Stack width="100%">
            <Text style={styles.label}>Postal Code</Text>
            <Input
              style={styles.input}
              px="5px" py="3px"
              borderColor={COLOR.black}
              backgroundColor={COLOR.darkGray3}
              cursorColor={COLOR.white}
              value={postalCode}
              onChangeText={(text) => setPostalCode(text)}
            />
          </Stack>
          <Stack width="100%">
            <Text style={styles.label}>Phone Number</Text>
            <Input
              style={styles.input}
              px="5px" py="3px"
              borderColor={COLOR.black}
              backgroundColor={COLOR.darkGray3}
              cursorColor={COLOR.white}
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
            />
          </Stack>
        </VStack>
        <Stack alignItems="center" mt={8} mb={4}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.submit}
          >
            <Text style={{ fontFamily: "Archivo-Bold", color: COLOR.black, fontSize: 12 }}>
              Save debit card
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

export default DebitCard;