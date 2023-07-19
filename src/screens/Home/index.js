import React, { useState } from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import {
  Box, HStack, Image, Stack, Text, VStack, View, PresenceTransition, FlatList, Progress
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";

// Icons
import {
  BookMarkIcon, CutIcon, InfinityIcon, MessageIcon, PauseIcon, PlayIcon, RightChatIcon, ShareIcon, WalletIcon
} from "../../constants/icons";

// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DirectMessage from "./components/Message";
import BookMark from "./components/BookMark";

// Constants
import { COLOR } from "../../constants/Color";
import { allFilterList } from "../../constants/static";

const { width, height } = Dimensions.get("screen");

const Home = ({ navigation }) => {

  const [filterOpened, setFilterOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [playMedia, setPlayMedia] = useState(false);
  const [openDM, setOpenDM] = useState(false);
  const [openBookMark, setOpenBookMark] = useState(false);

  return (
    <>
      <SafeAreaView flex={1} backgroundColor={COLOR.black}>
        {/* Play & Pause Button */}
        <Stack position="absolute" w="100%" h={height} justifyContent="center" alignItems="center">
          <TouchableOpacity onPress={() => setPlayMedia(!playMedia)} style={{ marginBottom: 50 }}>
            <SvgXml xml={!playMedia ? PlayIcon : PauseIcon} width={57} height={57} />
          </TouchableOpacity>
        </Stack>
        {/* Header */}
        <Header
          navigation={navigation}
          routeName="HomeScreen"
          setFilterOpened={setFilterOpened}
          filterOpened={filterOpened}
        />
        {/* Filter */}
        <PresenceTransition
          visible={filterOpened}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 250 } }}
        >
          <FlatList
            data={allFilterList}
            horizontal
            style={{ paddingBottom: 5 }}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedItem(item)}
                style={{
                  minWidth: (width - 50) / 4,
                  height: 34,
                  borderRadius: 20,
                  paddingHorizontal: 12,
                  backgroundColor: item.id === selectedItem?.id ? COLOR.primary : COLOR.lightGray2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: index === 0 ? 15 : 7,
                  marginRight: index === allFilterList.length - 1 ? 15 : 0,
                }}
              >
                <Text
                  fontFamily="Archivo-SemiBold"
                  color={item.id === selectedItem?.id ? COLOR.black : COLOR.primary}
                  fontSize={14}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </PresenceTransition>
        {/* Bottom */}
        <Box position="absolute" bottom={6} width="100%" height="auto" paddingX="20px">
          <HStack justifyContent="space-between">
            <HStack bottom={0} position="absolute">
              <Stack mb={8}>
                <Text fontFamily="Archivo-Bold" fontSize={30} color={COLOR.white}>Best I Ever Had</Text>
                <HStack alignItems="center">
                  <Text fontFamily="Archivo-Bold" fontSize={17} color={COLOR.white}>Boi-1da  |  </Text>
                  <Text fontFamily="Archivo" fontSize={10} letterSpacing={3} color={COLOR.gray}>BEAT</Text>
                </HStack>
              </Stack>
            </HStack>
            <VStack alignItems="center">
              {/* Avatar */}
              <TouchableOpacity onPress={() => navigation.navigate("CreatorProfileScreen")}>
                <View style={{ width: 49, height: 49, borderRadius: 50, overflow: 'hidden', marginBottom: 10 }}>
                  <Image
                    position="absolute"
                    width={"100%"} height={"100%"} alt="avatar"
                    source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }}
                  />
                </View>
                <HStack position="absolute" marginTop="35px" justifyContent={"center"} width="100%">
                  <View style={{ width: 22, height: 22, marginLeft: -8 }}>
                    <Image position="absolute" source={require('../../../assets/icons/add.png')} width={"100%"} height={"100%"} alt="avatar" />
                  </View>
                </HStack>
              </TouchableOpacity>
              {/* Chat */}
              <TouchableOpacity style={{ marginBottom: 10 }}>
                <SvgXml xml={RightChatIcon} />
              </TouchableOpacity>
              {/* BookMark */}
              <TouchableOpacity onPress={() => setOpenBookMark(true)} style={{ marginBottom: 18 }}>
                <SvgXml xml={BookMarkIcon} />
              </TouchableOpacity>
              {/* Share */}
              <TouchableOpacity style={{ marginBottom: 5 }}>
                <SvgXml xml={CutIcon} />
              </TouchableOpacity>
              {/* Collab */}
              <TouchableOpacity onPress={() => navigation.navigate("MarketplaceScreen")} style={{ marginBottom: 5 }}>
                <SvgXml xml={WalletIcon} />
              </TouchableOpacity>
              {/* Message */}
              <TouchableOpacity onPress={() => setOpenDM(true)} style={{ marginBottom: 20 }}>
                <SvgXml xml={MessageIcon} />
              </TouchableOpacity>
            </VStack>
          </HStack>
          <Progress bg="coolGray.500" _filledTrack={{ bg: "light.50" }} borderWidth={3.3} value={25} />
        </Box>
        {/* Direct Message ActionSheet */}
        <DirectMessage isOpen={openDM} onClose={() => setOpenDM(false)} />
        {/* BookMark ActionSheet */}
        <BookMark isOpen={openBookMark} onClose={() => setOpenBookMark(false)} />
      </SafeAreaView>
      <Footer navigation={navigation} routeName="HomeScreen" />
    </>
  );
};

export default Home;
