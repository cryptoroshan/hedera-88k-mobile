import React from "react";
import { Stack, Text, VStack } from "native-base";
import { StyleSheet, TouchableOpacity, Platform } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

// Constants
import { COLOR } from "../../../constants/Color";

const PayoutSetup = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.black }}>
      <Stack position="absolute" mt={Platform.OS === 'web' ? 5 : 16} paddingLeft={"36px"} zIndex={99}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={20} color={COLOR.white} />
        </TouchableOpacity>
      </Stack>
      <VStack flex={1} alignItems="center" justifyContent="center" paddingX="54px" space={10}>
        <Text fontFamily="Archivo-Bold" fontSize={20} lineHeight={22} color={COLOR.white}>
          Let's get you paid!
        </Text>
        <Stack>
          <Text fontFamily="Archivo-Thin" fontSize={10} lineHeight={16} color={COLOR.white} textAlign="center">
            You can send your money to one or more payout methods.
          </Text>
          <Text fontFamily="Archivo-Thin" fontSize={10} lineHeight={16} color={COLOR.white} textAlign="center">
            To manage your payout method(s) or assign a taxpayer, use the edit menu next to each payout method.
          </Text>
        </Stack>
        <VStack space={3}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PayoutMethodScreen")}
            style={styles.submit}
          >
            <Text style={{ fontFamily: "Archivo-Bold", color: COLOR.black, fontSize: 12 }}>
              Add payout method
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("HomeScreen")}
            style={styles.submit}
          >
            <Text style={{ fontFamily: "Archivo-Bold", color: COLOR.black, fontSize: 12 }}>
              Skip and set up later
            </Text>
          </TouchableOpacity>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default PayoutSetup;