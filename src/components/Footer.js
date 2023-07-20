import React from "react";
import { Platform } from "react-native";
import { HStack, Image, Pressable, Stack, Text } from "native-base";
import { COLOR } from "../constants/Color";

// Icons
import HomeSvg from "../../assets/icons/home.svg";
import HomeActiveSvg from "../../assets/icons/home_active.svg";
import PublishSvg from "../../assets/icons/publish.svg";
import PublishActiveSvg from "../../assets/icons/publish_active.svg";
import LibrarySvg from "../../assets/icons/library.svg";
import LibraryActiveSvg from "../../assets/icons/library_active.svg";

const Footer = ({ navigation, routeName }) => {
  return (
    <HStack justifyContent="space-between" width="100%" bottom={0} bg={COLOR.black} safeAreaBottom pt={2} pb={5} px="20px" zIndex={999}>
      <Pressable onPress={() => navigation.navigate("HomeScreen")}>
        <Stack alignItems={"center"} space={1}>
          {Platform.OS === 'web' ?
            (routeName === "HomeScreen" ? <Image source={require("../../assets/icons/home_active.svg")} width={23} height={23} alt="pause" />
              : <Image source={require("../../assets/icons/home.svg")} width={23} height={23} alt="play" />
            )
            :
            (routeName === "HomeScreen" ? <HomeActiveSvg width={23} height={23} />
              : <HomeSvg width={23} height={23} />
            )
          }
          <Text color={COLOR.white} fontSize={12}
            fontFamily={routeName === "HomeScreen" ? "Archivo-Bold" : "Archivo"}
          >
            Home
          </Text>
        </Stack>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("PublishScreen")}>
        <Stack alignItems={"center"} space={1}>
          {Platform.OS === 'web' ?
            (routeName === "PublishScreen" ? <Image source={require("../../assets/icons/publish_active.svg")} width={23} height={23} alt="pause" />
              : <Image source={require("../../assets/icons/publish.svg")} width={23} height={23} alt="play" />
            )
            :
            (routeName === "PublishScreen" ? <PublishActiveSvg width={23} height={23} />
              : <PublishSvg width={23} height={23} />
            )
          }
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
          {Platform.OS === 'web' ?
            (routeName === "LibraryScreen" ? <Image source={require("../../assets/icons/library_active.svg")} width={23} height={23} alt="pause" />
              : <Image source={require("../../assets/icons/library.svg")} width={23} height={23} alt="play" />
            )
            :
            (routeName === "LibraryScreen" ? <LibraryActiveSvg width={23} height={23} />
              : <LibrarySvg width={23} height={23} />
            )
          }
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