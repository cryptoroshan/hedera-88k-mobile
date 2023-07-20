import React from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { HStack, Text, View, Image } from "native-base";

// Icons
import ChatSvg from "../../../../../assets/icons/chat-left.svg";

// Constants
import { COLOR } from '../../../../constants/Color';

const TabBar = ({ tabName, setTabName }) => {
  return (
    <HStack width="100%" justifyContent="space-between" paddingX="30px" marginTop="30px">
      <TouchableOpacity
        onPress={() => setTabName("music")}
        style={{ alignItems: 'center', marginTop: 10 }}
      >
        <Text
          fontFamily="Archivo-Bold"
          fontSize={13}
          color={tabName === "music" ? COLOR.primary : COLOR.lightGray}
        >
          MUSIC
        </Text>
        <View style={tabName === "music" ? styles.activeDot : styles.dot} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setTabName("tour")}
        style={{ alignItems: 'center', marginTop: 10 }}
      >
        <Text
          fontFamily="Archivo-Bold"
          fontSize={13}
          color={tabName === "tour" ? COLOR.primary : COLOR.lightGray}
        >
          TOUR
        </Text>
        <View style={tabName === "tour" ? styles.activeDot : styles.dot} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setTabName("shop")}
        style={{ alignItems: 'center', marginTop: 10 }}
      >
        <Text
          fontFamily="Archivo-Bold"
          fontSize={13}
          color={tabName === "shop" ? COLOR.primary : COLOR.lightGray}
        >
          SHOP
        </Text>
        <View style={tabName === "shop" ? styles.activeDot : styles.dot} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setTabName("videos")}
        style={{ alignItems: 'center', marginTop: 10 }}
      >
        <Text
          fontFamily="Archivo-Bold"
          fontSize={13}
          color={tabName === "videos" ? COLOR.primary : COLOR.lightGray}
        >
          VIDEOS
        </Text>
        <View style={tabName === "videos" ? styles.activeDot : styles.dot} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setTabName("message")}
        style={{ width: 42, height: 42, overflow: 'hidden' }}
      >
        {Platform.OS === 'web' ? <Image source={require("../../../../../assets/icons/chat-left.svg")} width="42px" height="42px" alt="plus" />
          : <ChatSvg width="42px" height="42px" />
        }
      </TouchableOpacity>
    </HStack>
  );
};

const styles = StyleSheet.create({
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginTop: 3,
    backgroundColor: "transparent"
  },
  activeDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginTop: 3,
    backgroundColor: COLOR.primary
  },
});

export default TabBar;