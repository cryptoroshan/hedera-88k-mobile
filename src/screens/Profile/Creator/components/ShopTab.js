import React from "react";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Box, Center, HStack, Image, Stack, Text, VStack } from "native-base";

// Constants
import { COLOR } from "../../../../constants/Color";
import { AllProducts } from "../../../../constants/static";

const { width } = Dimensions.get("window");

const ShopTab = () => {
  return (
    <Stack width="100%" paddingX="25px" marginTop={10}>
      <Text fontFamily="Archivo-Bold" fontSize={20} color={COLOR.white}>
        Billie Eilish Merch
      </Text>
      <HStack justifyContent="space-between" marginY="20px" flexWrap="wrap">
        {AllProducts.map((item, index) =>
          <VStack width="48%" alignItems="center" key={`${item.name}-${index}`}>
            <Box style={styles.imageContainer}>
              <Image
                source={item.image}
                width="100%" height="100%" resizeMode="cover" alt={item.name}
              />
            </Box>
            <Stack width="70%">
              <Text fontFamily="Archivo-Bold" fontSize={10} color={COLOR.white} numberOfLines={2}>
                {item.name}
              </Text>
              <Text fontFamily="Archivo" fontSize={10} color={COLOR.gray1}>
                {item.price}
              </Text>
            </Stack>
          </VStack>
        )}
      </HStack>
      <Center>
        <TouchableOpacity style={styles.button}>
          <Text fontFamily="Archivo-Bold" fontSize={10} color={COLOR.black}>
            Shop on website
          </Text>
        </TouchableOpacity>
      </Center>
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (width - 50) * 48 / 100
  },
  imageContainer: {
    width: "100%",
    height: (width - 50) * 48 / 100,
    overflow: "hidden",
  },
  button: {
    width: 136,
    height: 35,
    borderRadius: 24,
    backgroundColor: COLOR.primary,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  }
});

export default ShopTab;