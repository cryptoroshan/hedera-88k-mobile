import React from "react";
import { StyleSheet, TouchableOpacity, Platform } from "react-native";
import { Box, HStack, Image, Stack, Text } from "native-base";

// Icons
import PlaySvg from "../../../../../assets/icons/play.svg";

// Constants
import { COLOR } from "../../../../constants/Color";
import { AllVideos } from "../../../../constants/static";

const VideosTab = () => {
  return (
    <Stack width="100%" paddingX="25px" marginTop={10}>
      <Text fontFamily="Archivo-Bold" fontSize={20} color={COLOR.white}>
        Videos
      </Text>
      <HStack marginY="20px" width="100%" justifyContent="space-between" flexWrap="wrap">
        {AllVideos.map((item, index) =>
          <Box width="31.5%" height="162px" marginBottom={2} key={`${item.name}-${index}`}>
            <Image
              source={item.video}
              width="100%" height="100%" resizeMode="cover" position="absolute" opacity={0.8}
              alt={`${item.name}-${index}`}
            />
            <TouchableOpacity style={styles.playbtn}>
              {Platform.OS === 'web' ? <Image source={require("../../../../../assets/icons/play.svg")} width="24px" height="24px" alt="plus" />
                : <PlaySvg width="24px" height="24px" />
              }
            </TouchableOpacity>
          </Box>
        )}
      </HStack>
    </Stack>
  );
};

const styles = StyleSheet.create({
  playbtn: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  }
});

export default VideosTab;