import React from "react";
import { Actionsheet, Input, HStack, Text, Box, Image, View } from "native-base";
import { Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLOR } from "../../../constants/Color";

const { height } = Dimensions.get("window");

const DirectMessage = ({ isOpen, onClose }) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
      <Actionsheet.Content backgroundColor={COLOR.dark} bottom="75px" h={height / 2}>
        <HStack w="100%" h={60} justifyContent="center" alignItems="center" borderBottomColor={COLOR.gray} borderBottomWidth="0.5px">
          <Text style={{ fontFamily: "Archivo-Bold", fontSize: 14, color: COLOR.primary }}>Direct Message</Text>
          <TouchableOpacity style={{ position: 'absolute', right: 20 }}>
            <Ionicons name="close-outline" size={22} color={COLOR.primary} />
          </TouchableOpacity>
        </HStack>
        <Box w="100%" h={height / 2 - 60} justifyContent="flex-end" bottom="35px" paddingX="20px">
          <HStack justifyContent="space-between" alignItems="center">
            <Input
              width="88%"
              variant="rounded"
              placeholder="Send a direct message to Boi-lda"
              placeholderTextColor={COLOR.white}
              selectionColor={COLOR.primary}
              color={COLOR.primary}
              borderColor={COLOR.dark}
              backgroundColor={COLOR.darkGray}
              fontFamily="Archivo-Thin"
              fontSize={12}
              paddingTop="5px"
              paddingBottom="5px"
              paddingLeft="18px"
              paddingRight="18px"
              numberOfLines={1}
            />
            <View style={{ width: 35, height: 35, borderRadius: 50, overflow: 'hidden' }}>
              <Image
                position="absolute"
                width={"100%"} height={"100%"} alt="avatar"
                source={{ uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" }}
              />
            </View>
          </HStack>
        </Box>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default DirectMessage;