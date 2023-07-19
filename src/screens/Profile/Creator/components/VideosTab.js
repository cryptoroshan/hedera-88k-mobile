import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Box, HStack, Image, Stack, Text } from "native-base";
import { SvgXml } from "react-native-svg";

// Icons
import { PlayIcon } from "../../../../constants/icons";

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
              <SvgXml xml={PlayIcon} width={24} height={24} />
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