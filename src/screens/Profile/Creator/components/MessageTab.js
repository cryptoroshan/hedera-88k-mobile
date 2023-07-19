import React, { useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { Box, HStack, Stack, Text, VStack } from "native-base";

// Constants
import { COLOR } from "../../../../constants/Color";
import { MessagesList } from "../../../../constants/static";

// Components
import Avatar from "../../../../components/Avatar";

const { width } = Dimensions.get("window");

const MessageTab = () => {

  const [tab, setTab] = useState(1);

  return (
    <Stack width="100%" paddingX="25px" marginTop={6}>
      <HStack justifyContent="space-between">
        <TouchableOpacity onPress={() => setTab(1)} style={{ alignItems: 'center' }}>
          <Text fontFamily="Archivo-Bold" fontSize={15} color={tab === 1 ? COLOR.primary : "#f8f8f8aa"}>
            Paid Messages
          </Text>
          <Box style={tab === 1 ? styles.activeDot : styles.dot} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab(2)} style={{ alignItems: 'center' }}>
          <Text fontFamily="Archivo-Bold" fontSize={15} color={tab === 2 ? COLOR.primary : "#f8f8f8aa"}>
            Friends
          </Text>
          <Box style={tab === 2 ? styles.activeDot : styles.dot} />
        </TouchableOpacity>
      </HStack>
      <VStack space={3} marginTop="20px">
        {tab === 1 ?
          MessagesList.paid_messages.map((item, index) =>
            <TouchableOpacity key={`${item.name}-${index}`}>
              <HStack alignItems="center" width="100%">
                <Avatar src={item.image} name={item.name} size={62} radius={62} />
                <VStack justifyContent="center" paddingLeft="15px" style={{ width: width - 112 }}>
                  <HStack justifyContent="space-between">
                    <Text fontFamily="Archivo-Bold" fontSize="15px" color={COLOR.white}>
                      {item.name}
                    </Text>
                    <Text fontFamily="Archivo-Bold" fontSize="11px" color="#f8f8f8aa">
                      {item.time}
                    </Text>
                  </HStack>
                  <Text fontFamily="Archivo-Bold" fontSize="11px" color={COLOR.white}>
                    {item.lastMsg}
                  </Text>
                </VStack>
              </HStack>
            </TouchableOpacity>
          )
          :
          MessagesList.friends.map((item, index) =>
            <TouchableOpacity key={`${item.name}-${index}`}>
              <HStack alignItems="center" width="100%">
                <Avatar src={item.image} name={item.name} size={62} radius={62} />
                <VStack justifyContent="center" paddingLeft="15px" style={{ width: width - 112 }}>
                  <HStack justifyContent="space-between">
                    <Text fontFamily="Archivo-Bold" fontSize="15px" color={COLOR.white}>
                      {item.name}
                    </Text>
                    <Text fontFamily="Archivo-Bold" fontSize="11px" color="#f8f8f8aa">
                      {item.time}
                    </Text>
                  </HStack>
                  <Text fontFamily="Archivo-Bold" fontSize="11px" color={COLOR.white}>
                    {item.lastMsg}
                  </Text>
                </VStack>
              </HStack>
            </TouchableOpacity>
          )
        }
      </VStack>
    </Stack>
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

export default MessageTab;