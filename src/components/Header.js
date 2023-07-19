import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Box, HStack, Text } from "native-base";
import { Feather, Ionicons } from "@expo/vector-icons";

// Constants
import { COLOR } from "../constants/Color";

const Header = ({ navigation, routeName, filterOpened, setFilterOpened }) => {
  return (
    <HStack
      marginTop={2}
      justifyContent='space-between'
      alignItems='center'
      paddingX='20px'
      pb={3}
      zIndex={10}
    >
      {
        routeName === "HomeScreen" ?
          <TouchableOpacity onPress={() => setFilterOpened(!filterOpened)}>
            {
              filterOpened ?
                <Ionicons name="remove-outline" size={30} color={COLOR.primary} />
                :
                <Feather name="menu" size={23} color={COLOR.primary} />
            }
          </TouchableOpacity>
          :
          routeName === "ExploreScreen" ?
            <TouchableOpacity style={{ marginTop: -5, marginLeft: 8 }} onPress={() => navigation.navigate("SearchExploreScreen")}>
              <Feather name="search" size={23} color={COLOR.white} />
            </TouchableOpacity>
            : <Box />
      }
      <HStack width="5/6" alignItems="center" marginTop="5px" justifyContent="space-between">
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreen")}
          style={{ alignItems: 'center' }}
        >
          <Text
            fontFamily="Archivo-SemiBold"
            color={routeName === "HomeScreen" ? COLOR.primary : COLOR.lightGray}
            lineHeight={14}
            fontSize={13}
          > Your DJ </Text>
          <View style={{ width: 6, height: 6, backgroundColor: routeName === "HomeScreen" ? COLOR.primary : COLOR.black, borderRadius: 3, marginTop: 5 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("MarketplaceScreen")}
          style={{ alignItems: 'center' }}
        >
          <Text
            fontFamily="Archivo-SemiBold"
            color={routeName === "MarketplaceScreen" ? COLOR.primary : COLOR.lightGray}
            lineHeight={14}
            fontSize={13}
          > Marketplace </Text>
          <View style={{ width: 6, height: 6, backgroundColor: routeName === "MarketplaceScreen" ? COLOR.primary : COLOR.black, borderRadius: 3, marginTop: 5 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ExploreScreen")}
          style={{ alignItems: 'center' }}
        >
          <Text
            fontFamily="Archivo-SemiBold"
            color={routeName === "ExploreScreen" ? COLOR.primary : COLOR.lightGray}
            lineHeight={14}
            fontSize={13}
          > Explore </Text>
          <View style={{ width: 6, height: 6, backgroundColor: routeName === "ExploreScreen" ? COLOR.primary : COLOR.black, borderRadius: 3, marginTop: 5 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 32, height: 32, borderRadius: 50, overflow: 'hidden' }}>
          {/* <Image source={require('../../assets/images/avatar.jpg')} width={"100%"} height={"100%"} alt="avatar" /> */}
        </TouchableOpacity>
      </HStack>
    </HStack>
  );
};

export default Header;