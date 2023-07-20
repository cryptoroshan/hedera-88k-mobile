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

const PayoutMethod = ({ navigation }) => {

  const [username, setUsername] = useState(null);

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
            Add payout method
          </Text>
        </Box>
        <Stack marginTop={12} mb={1} paddingLeft="30px">
          <Text style={styles.text}>
            Billing country/region
          </Text>
        </Stack>
        <Input
          w={"40%"} h={"30px"} ml="25px"
          borderRadius="30px"
          borderColor={"white"}
          color={COLOR.white}
          cursorColor={COLOR.white}
          overflow="hidden"
          fontSize={16}
          value={username}
          onChangeText={(text) => setUsername(text)}
          InputRightElement={
            <Stack mr={2}>
              {Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/arrow-down.svg")} width="8px" height="6px" alt="arrow-down" />
                : <ArrowDownSvg width="8px" height="6px" />
              }
            </Stack>
          }
        />
        <VStack mt={5} px="16px" space={2}>
          <TouchableOpacity onPress={() => navigation.navigate("BankAccountScreen")}>
            <HStack style={styles.option}>
              <VStack h="100%" justifyContent="space-between">
                <Text style={styles.text}>
                  Bank Account
                </Text>
                <Text style={styles.description}>
                  your revenue directly deposit to your bank account
                </Text>
              </VStack>
              {Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/arrow-right.svg")} width="8px" height="12px" alt="arrow-left" />
                : <ArrowRightSvg width="8px" height="12px" />
              }
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("DebitCardScreen")}>
            <HStack style={styles.option}>
              <VStack h="100%" justifyContent="space-between">
                <Text style={styles.text}>
                  Debit Card
                </Text>
                <Text style={styles.description}>
                  your revenue directly deposit to your debit card
                </Text>
              </VStack>
              {Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/arrow-right.svg")} width="8px" height="12px" alt="arrow-left" />
                : <ArrowRightSvg width="8px" height="12px" />
              }
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("WireTransferScreen")}>
            <HStack style={styles.option}>
              <VStack h="100%" justifyContent="space-between">
                <Text style={styles.text}>
                  Wire Transfers
                </Text>
                <Text style={styles.description}>
                  your revenue directly deposit to your bank account
                </Text>
              </VStack>
              {Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/arrow-right.svg")} width="8px" height="12px" alt="arrow-left" />
                : <ArrowRightSvg width="8px" height="12px" />
              }
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("PaypalScreen")}>
            <HStack style={styles.option}>
              <VStack h="100%" justifyContent="space-between">
                <Text style={styles.text}>
                  Paypal
                </Text>
                <Text style={styles.description}>
                  your revenue directly deposit to your paypal
                </Text>
              </VStack>
              {Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/arrow-right.svg")} width="8px" height="12px" alt="arrow-left" />
                : <ArrowRightSvg width="8px" height="12px" />
              }
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity>
            <HStack style={styles.option}>
              <VStack h="100%" justifyContent="space-between">
                <Text style={styles.text}>
                  Others
                </Text>
                <Text style={styles.description}>
                  Choose other payout types
                </Text>
              </VStack>
              {Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/arrow-right.svg")} width="8px" height="12px" alt="arrow-left" />
                : <ArrowRightSvg width="8px" height="12px" />
              }
            </HStack>
          </TouchableOpacity>
        </VStack>
        <Stack alignItems="center" marginTop={10}>
          <TouchableOpacity
            onPress={() => navigation.navigate("HomeScreen")}
            style={styles.submit}
          >
            <Text style={{ fontFamily: "Archivo-Bold", color: COLOR.black, fontSize: 12 }}>
              Save payout method
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
  description: {
    fontFamily: "Archivo",
    color: COLOR.white,
    fontSize: 9,
    lineHeight: 22,
  },
  option: {
    width: "100%",
    height: 67,
    borderRadius: 6,
    backgroundColor: COLOR.darkGray2,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 11,
    paddingLeft: 14,
    paddingRight: 25,
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

export default PayoutMethod;