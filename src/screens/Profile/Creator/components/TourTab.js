import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Box, Center, HStack, Stack, Text, VStack } from "native-base";

// Constants
import { COLOR } from "../../../../constants/Color";
import { AllTourDates } from "../../../../constants/static";

const TourTab = () => {
  return (
    <Stack width="100%" paddingX="25px" marginTop={10}>
      <Text fontFamily="Archivo-Bold" fontSize={20} color={COLOR.white}>
        On Tour
      </Text>
      <Text fontFamily="Archivo-Bold" fontSize={16} color={COLOR.white} textAlign="center" marginTop="10px">
        Near Los Angeles
      </Text>
      <Text fontFamily="Archivo-Thin" fontSize={10} color={COLOR.white} textAlign="center" marginTop="8px">
        This Artist has no upcoming events near Los Angeles
      </Text>
      <Center marginTop="10px">
        <TouchableOpacity style={styles.location}>
          <Text fontFamily="Archivo-Bold" fontSize={10} color="black">
            Change Location
          </Text>
        </TouchableOpacity>
      </Center>
      <Text fontFamily="Archivo-Bold" fontSize={16} color={COLOR.white} textTransform="uppercase" textAlign="center" marginTop="35px">
        All Tour Dates
      </Text>
      <HStack justifyContent="space-between" width="100%" flexWrap="wrap">
        {AllTourDates.map((item, index) =>
          <HStack style={styles.card} key={`${item.title}-${index}`}>
            <VStack width="30%" justifyContent="center" alignItems="center" space="10px">
              <Text fontFamily="Archivo" fontSize={10} color={COLOR.lightGray1}>
                2023
              </Text>
              <Text fontFamily="Archivo-Bold" fontSize={13} color={COLOR.white}>
                Aug 3
              </Text>
              <Text fontFamily="Archivo" fontSize={10} color={COLOR.lightGray1}>
                Thur.
              </Text>
            </VStack>
            <VStack width="70%" style={styles.rightContainer}>
              <Stack width="100%">
                <Text fontFamily="Archivo-Bold" fontSize={11} color={COLOR.white} numberOfLines={2}>
                  {item.title}
                </Text>
                <Text fontFamily="Archivo-Bold" fontSize={11} color={COLOR.white}>
                  {`- ${item.passed_day} Day Pass`}
                </Text>
              </Stack>
              <Stack width="100%">
                <Text fontFamily="Archivo" fontSize={9} color={COLOR.white} lineHeight={10}>
                  {`8:00 PM`}
                </Text>
                <Text fontFamily="Archivo" fontSize={9} color={COLOR.white} lineHeight={10}>
                  {item.location}
                </Text>
                <HStack space={2} justifyContent="flex-start" marginTop="10px">
                  <TouchableOpacity style={styles.button}>
                    <Text fontFamily="Archivo-Bold" fontSize={8} color={COLOR.primary}>
                      Tickets
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <Text fontFamily="Archivo-Bold" fontSize={8} color={COLOR.primary}>
                      RSVP
                    </Text>
                  </TouchableOpacity>
                </HStack>
              </Stack>
            </VStack>
          </HStack>
        )}
      </HStack>
    </Stack>
  );
};

const styles = StyleSheet.create({
  location: {
    width: 120,
    height: 30,
    borderRadius: 24,
    backgroundColor: COLOR.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "48%",
    height: 120,
    borderRadius: 9,
    backgroundColor: "rgba(248, 248, 248, 0.12)",
    marginTop: 12,
  },
  rightContainer: {
    borderLeftWidth: 0.5,
    borderLeftColor: "rgba(248, 248, 248, 0.20)",
    paddingTop: 10,
    paddingBottom: 8,
    paddingHorizontal: 8,
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    width: "40%",
    height: 15,
    borderRadius: 24,
    borderWidth: 0.5,
    borderColor: COLOR.primary,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default TourTab;