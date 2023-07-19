import React from "react";
import { View } from "react-native";
import { HStack, Image, Pressable, Stack, Text } from "native-base";
import { COLOR } from "../constants/Color";
import { SvgXml } from "react-native-svg";

// Icons
import { ActiveHomeIcon, ActiveLibraryIcon, ActivePublishIcon, HomeIcon, LibraryIcon, PublishIcon } from "../constants/icons";

const Footer = ({ navigation, routeName }) => {
  return (
    <HStack justifyContent="space-between" width="100%" bottom={0} bg={COLOR.black} safeAreaBottom pt={2} pb={5} px="20px" zIndex={999}>
      <Pressable onPress={() => navigation.navigate("HomeScreen")}>
        <Stack alignItems={"center"} space={1}>
          <SvgXml xml={routeName === "HomeScreen" ? ActiveHomeIcon : HomeIcon} width={23} height={23} />
          <Text color={COLOR.white} fontSize={12}
            fontFamily={routeName === "HomeScreen" ? "Archivo-Bold" : "Archivo"}
          >
            Home
          </Text>
        </Stack>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("PublishScreen")}>
        <Stack alignItems={"center"} space={1}>
          <SvgXml xml={routeName === "PublishScreen" ? ActivePublishIcon : PublishIcon} width={23} height={23} />
          <Text
            color={COLOR.white}
            fontSize={12}
            fontFamily={routeName === "PublishScreen" ? "Archivo-Bold" : "Archivo"}
          >
            Publish
          </Text>
        </Stack>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("LibraryScreen")}>
        <Stack alignItems={"center"} space={1}>
          <SvgXml xml={routeName === "LibraryScreen" ? ActiveLibraryIcon : LibraryIcon} width={23} height={23} />
          <Text
            color={COLOR.white}
            fontSize={12}
            fontFamily={routeName === "LibraryScreen" ? "Archivo-Bold" : "Archivo"}
          >
            Library
          </Text>
        </Stack>
      </Pressable>
    </HStack>
  )
};

export default Footer;