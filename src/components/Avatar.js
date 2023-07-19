import React from "react";
import { Box, Image } from "native-base";

const Avatar = ({ name, src, uri, size, radius, style }) => {
  return (
    <Box width={size} height={size} borderRadius={radius} overflow="hidden" style={{ ...style }}>
      {src &&
        <Image
          source={src}
          width="100%" height="100%" resizeMode="cover"
          alt={name}
        />
      }
      {uri &&
        <Image
          source={{ uri: uri }}
          width="100%" height="100%" resizeMode="cover"
          alt={name}
        />
      }
    </Box>
  );
};

export default Avatar;