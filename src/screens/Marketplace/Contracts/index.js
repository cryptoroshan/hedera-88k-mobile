import React from "react";
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Box, Center, HStack, Image, Stack, Text, VStack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

// Constants
import { COLOR } from "../../../constants/Color";
const { width, height } = Dimensions.get("window");

// Components
import Footer from "../../../components/Footer";

const Contracts = ({ navigation, route }) => {
  const { data } = route.params;

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.black }}>
        <ScrollView flex={1} style={{ width: width }}>
          {/* Header Text */}
          <VStack alignItems="center" space={2} marginTop={10}>
            <Text fontFamily="Archivo-Bold" color={COLOR.white} fontSize={25}>Congrats!</Text>
            <Center>
              <Text fontFamily="Archivo" color={COLOR.white} fontSize={9}>
                Smart contract generated,
              </Text>
              <Text fontFamily="Archivo" color={COLOR.white} fontSize={9}>
                now you have access to your selected file!
              </Text>
            </Center>
          </VStack>
          {/* Image */}
          <HStack
            w={width}
            paddingX="18px"
            marginTop={data.length === 1 ? 16 : 8}
            justifyContent={data.length === 1 ? "center" : "space-between"}
          >
            {
              data && data.map((item, index) => {
                return (
                  <Stack
                    style={{
                      maxWidth: width * 3 / 7,
                      height: 259,
                      borderColor: COLOR.white,
                      borderRadius: 14,
                      paddingTop: 5,
                      paddingHorizontal: 5,
                      width: (width - 60) / data.length
                    }}
                    borderWidth={0.25}
                    key={index}
                  >
                    <Stack w="100%" h={data.length === 3 ? "50%" : "194px"}>
                      <Image source={item.image} w="100%" h="100%" borderRadius="11px" alt={item.name} />
                    </Stack>
                    <VStack
                      h={data.length === 3 ? "127px" : "60px"}
                      justifyContent="center"
                      space={item.title ? 1 : 3}
                    >
                      <Text style={{
                        fontFamily: "Archivo-SemiBold",
                        lineHeight: 16,
                        textAlign: "center",
                        textTransform: "capitalize",
                        color: COLOR.white, fontSize: item.title ? 10 : 13
                      }} numberOfLines={3}>
                        {item.name}
                      </Text>
                      {item.title && <Text style={styles.cardName} numberOfLines={2}>{item.title}</Text>}
                      <Text style={styles.cardTypeName}>{item.type}</Text>
                    </VStack>
                  </Stack>
                )
              })
            }
          </HStack>
          <VStack alignItems="center" space={5} marginTop={5} paddingX="1/6">
            {data.length !== 1 &&
              <Text fontFamily="Archivo-Bold" color={COLOR.white} fontSize={14} textAlign="center" lineHeight="20px" textTransform="uppercase">
                How It Works:
              </Text>
            }
            {data.length === 1 &&
              <Text fontFamily="Archivo" color={COLOR.white} fontSize={12} textAlign="center" lineHeight="20px">
                {`Create a song using this 1 ${data[0].type} and earn 50% of its streaming revenue.`}
              </Text>
            }
            {data.length === 2 &&
              <Box>
                <Text fontFamily="Archivo" color={COLOR.white} fontSize={12} textAlign="center" lineHeight="20px" marginTop={15}>
                  {`Create a song using all of selected items, you could earn 33 % of its streaming revenue.`}
                </Text>
                <Text fontFamily="Archivo" color={COLOR.white} fontSize={12} textAlign="center" lineHeight="20px" marginTop={15}>
                  {`Create a song using  only 1 ${data[0].type} only, you could earn 50% of its streaming revenue.`}
                </Text>
                <Text fontFamily="Archivo" color={COLOR.white} fontSize={12} textAlign="center" lineHeight="20px" marginTop={15}>
                  {`Create a song using  1 ${data[1].type} only, you could earn 50% of its streaming revenue.`}
                </Text>
              </Box>
            }
            {data.length === 3 &&
              <Box>
                <Text fontFamily="Archivo" color={COLOR.white} fontSize={12} textAlign="center" lineHeight="20px" marginTop={15}>
                  {`Create a song using all of selected items, you could earn 25 % of its streaming revenue.`}
                </Text>
                <Text fontFamily="Archivo" color={COLOR.white} fontSize={12} textAlign="center" lineHeight="20px" marginTop={15}>
                  {`Create a song using  only 1 voice only, you could earn 50% of its streaming revenue.`}
                </Text>
                <Text fontFamily="Archivo" color={COLOR.white} fontSize={12} textAlign="center" lineHeight="20px" marginTop={15}>
                  {`Create a song using  1 beat only, you could earn 50% of its streaming revenue.`}
                </Text>
                <Text fontFamily="Archivo" color={COLOR.white} fontSize={12} textAlign="center" lineHeight="20px" marginTop={15}>
                  {`Create a song using  1 song only, you could earn 50% of its streaming revenue.`}
                </Text>
              </Box>
            }
            <VStack space={5} marginTop={6}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Download File</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
                <Text style={styles.btnTxt} numberOfLines={2}>Back To Marketplace</Text>
              </TouchableOpacity>
            </VStack>
          </VStack>
        </ScrollView>
      </SafeAreaView>
      <Footer navigation={navigation} routeName="HomeScreen" />
    </>
  );
};

const styles = StyleSheet.create({
  cardName: {
    fontFamily: "Archivo-SemiBold",
    lineHeight: 16,
    textAlign: "center",
    textTransform: "capitalize",
    color: COLOR.white,
  },
  cardTypeName: {
    fontFamily: "Archivo",
    fontSize: 8,
    lineHeight: 9,
    textAlign: "center",
    letterSpacing: 3,
    textTransform: "uppercase",
    color: COLOR.white
  },
  btn: {
    width: 164,
    height: 63,
    borderRadius: 38,
    backgroundColor: COLOR.white,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTxt: {
    fontFamily: "Archivo-Bold",
    fontSize: 14,
    color: COLOR.black,
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: 16,
  }
})

export default Contracts;