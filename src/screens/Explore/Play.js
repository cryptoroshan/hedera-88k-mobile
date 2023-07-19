import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Box, HStack, Image, Slider, Stack, Text, VStack } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

// Icons
import { Entypo } from '@expo/vector-icons';
import {
  InfinityIcon, LeftIcon, PauseIcon, PlayIcon, RepeatIcon, ShuffleIcon
} from '../../constants/icons';

// Constants
import { COLOR } from '../../constants/Color';

// Components
import Footer from '../../components/Footer';

const Play = ({ navigation, route }) => {
  const { music } = route.params;

  const [sliderValue, setSliderValue] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  return (
    <>
      {/* Background Image */}
      <Image
        source={{ uri: "https://wallpaperaccess.com/full/359721.jpg" }}
        position="absolute"
        width="100%"
        height="100%"
        alt="background"
      />
      <Box style={styles.overlay} />
      <SafeAreaView flex={1} width="100%">
        <HStack paddingX="30px" marginTop="18px">
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 15 }}>
            <SvgXml xml={LeftIcon} width={13} height={19} />
          </TouchableOpacity>
        </HStack>
        <VStack position="absolute" bottom="50px" width="100%" paddingX="26px">
          <Stack>
            <Text fontFamily="Archivo-Bold" fontSize={25} color={COLOR.primary}>{music.title}</Text>
            <Text fontFamily="Archivo" fontSize={15} color={COLOR.primary}>{music.name}</Text>
          </Stack>
          <VStack marginTop="10px">
            <Slider
              colorScheme="#FFFFFF80"
              defaultValue={sliderValue}
              onChange={v => setSliderValue(Math.floor(v))}
            >
              <Slider.Track bg="#FFFFFF80" size={3}>
                <Slider.FilledTrack bg={COLOR.primary} />
              </Slider.Track>
              <Slider.Thumb borderWidth="0" bg={COLOR.primary} size='2.5' />
            </Slider>
            <HStack justifyContent="space-between">
              <Text fontFamily="Archivo" fontSize={10} color={COLOR.primary}>0:57</Text>
              <Text fontFamily="Archivo" fontSize={10} color={COLOR.primary}>2:09</Text>
            </HStack>
          </VStack>
          <HStack justifyContent="space-between" alignItems="center" marginTop="8px">
            <TouchableOpacity>
              <Entypo name="dots-three-horizontal" size={22} color={COLOR.primary} />
            </TouchableOpacity>
            <TouchableOpacity>
              <SvgXml xml={ShuffleIcon} width={49} height={49} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsPaused(!isPaused)}>
              <SvgXml xml={isPaused ? PlayIcon : PauseIcon} width={42} height={42} />
            </TouchableOpacity>
            <TouchableOpacity>
              <SvgXml xml={RepeatIcon} width={47} height={47} />
            </TouchableOpacity>
            <TouchableOpacity>
              <SvgXml xml={InfinityIcon} width={39} height={39} />
            </TouchableOpacity>
          </HStack>
        </VStack>
        <Box position="absolute" bottom={0} width="100%" backgroundColor="#5F5F5F"></Box>
      </SafeAreaView>
      <Footer navigation={navigation} routeName="HomeScreen" />
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: COLOR.black,
    opacity: 0.3
  }
})

export default Play;