import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { HStack, Text, View } from "native-base";
import { SvgXml } from 'react-native-svg';

// Icons
import { LeftChatIcon } from '../../../../constants/icons';

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
        <SvgXml xml={LeftChatIcon} width={42} height={42} />
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