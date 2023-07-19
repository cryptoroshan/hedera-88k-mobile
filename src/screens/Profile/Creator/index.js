import React, { useState } from "react";
import { Box, HStack, Image, Text, VStack } from "native-base";
import { TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { SvgXml } from "react-native-svg";

// Icons
import { AntDesign, Entypo, FontAwesome, FontAwesome5, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { InfinityIcon, TikTokIcon, WalletIcon1 } from "../../../constants/icons";

// Constants
import { COLOR } from "../../../constants/Color";

// Components
import TabBar from "./components/TabBar";
import MusicTab from "./components/MusicTab";
import ShopTab from "./components/ShopTab";
import TourTab from "./components/TourTab";
import VideosTab from "./components/VideosTab";
import MessageTab from "./components/MessageTab";

const CreatorProfile = ({ navigation }) => {

  const [tabName, setTabName] = useState("music");

  return (
    <ScrollView style={styles.container}>
      <Box width="100%" alignItems={"center"} paddingBottom={5}>
        {/* Profile Photo */}
        <Box position="absolute" width="100%" height="360px">
          <Image source={{
            uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          }}
            width="100%" height="100%" resizeMode="cover" alt="creator-photo"
          />
        </Box>
        {/* Profile Info */}
        <VStack width="100%" height="360px" justifyContent="space-between" paddingX="18px" paddingTop={12}>
          <HStack justifyContent="space-between" alignItems="center">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={20} color={COLOR.white} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("PayoutScreen")}>
              <SvgXml xml={WalletIcon1} width={44} height={44} />
            </TouchableOpacity>
          </HStack>
          <VStack height="auto">
            <HStack justifyContent="space-between" alignItems="center" height="auto">
              <HStack alignItems="center" space={2}>
                <Text fontFamily="Archivo-Bold" fontSize={50} color={COLOR.white} numberOfLines={2}>
                  Billie Eilish
                </Text>
                <TouchableOpacity style={styles.infinityCircle}>
                  <SvgXml xml={InfinityIcon} width={20} height={20} />
                </TouchableOpacity>
              </HStack>
              <TouchableOpacity>
                <Entypo name="dots-three-horizontal" size={22} color={COLOR.primary} />
              </TouchableOpacity>
            </HStack>
            <HStack justifyContent="space-between" alignItems="center" paddingBottom={4}>
              <TouchableOpacity>
                <FontAwesome name="spotify" size={24} color={COLOR.white} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Fontisto name="applemusic" size={24} color={COLOR.white} />
              </TouchableOpacity>
              <TouchableOpacity>
                <SvgXml xml={TikTokIcon} width={24} height={24} />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="instagram" size={24} color={COLOR.white} />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="youtube" size={24} color={COLOR.white} />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="twitter" size={24} color={COLOR.white} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome5 name="facebook" size={24} color={COLOR.white} />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons name="web" size={24} color={COLOR.white} />
              </TouchableOpacity>
            </HStack>
          </VStack>
        </VStack>
        {/* Tab View */}
        <TabBar tabName={tabName} setTabName={setTabName} />
        {tabName === "music" &&
          <MusicTab />
        }
        {tabName === "tour" &&
          <TourTab />
        }
        {tabName === "shop" &&
          <ShopTab />
        }
        {tabName === "videos" &&
          <VideosTab />
        }
        {tabName === "message" &&
          <MessageTab />
        }
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.black
  },
  infinityCircle: {
    width: 20,
    height: 20,
    borderRadius: 9,
    backgroundColor: COLOR.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
});

export default CreatorProfile;