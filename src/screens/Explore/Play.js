import React, { useState } from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { Box, HStack, Image, Slider, Stack, Text, VStack } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

// Icons
import { Entypo } from '@expo/vector-icons';
import InfinitySvg from "../../../assets/icons/infinity.svg";
import LeftSvg from "../../../assets/icons/left.svg";
import PlaySvg from "../../../assets/icons/play.svg";
import PauseSvg from "../../../assets/icons/pause.svg";
import RepeatSvg from "../../../assets/icons/repeat.svg";
import ShuffleSvg from "../../../assets/icons/shuffle.svg";

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
      <SafeAreaView style={{ flex: 1, width: "100%" }}>
        <HStack paddingX="30px" marginTop="18px">
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 15 }}>
            {Platform.OS === 'web' ? <Image source={require("../../../assets/icons/left.svg")} width="13px" height="19px" alt='left' />
              : <LeftSvg width="13px" height="19px" />
            }
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
              {Platform.OS === 'web' ? <Image source={require("../../../assets/icons/left.svg")} width="49px" height="49px" alt='shuffle' />
                : <ShuffleSvg width="49px" height="49px" />
              }
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsPaused(!isPaused)}>
              {isPaused ? (
                Platform.OS === 'web' ? <Image source={require("../../../assets/icons/play.svg")} width="42px" height="42px" alt='play' />
                  : <PlaySvg width="42px" height="42px" />
              ) : (
                Platform.OS === 'web' ? <Image source={require("../../../assets/icons/pause.svg")} width="42px" height="42px" alt='pause' />
                  : <PauseSvg width="42px" height="42px" />
              )}
            </TouchableOpacity>
            <TouchableOpacity>
              {Platform.OS === 'web' ? <Image source={require("../../../assets/icons/repeat.svg")} width="47px" height="47px" alt='shuffle' />
                : <RepeatSvg width="47px" height="47px" />
              }
            </TouchableOpacity>
            <TouchableOpacity>
              {Platform.OS === 'web' ? <Image source={require("../../../assets/icons/infinity.svg")} width="39px" height="39px" alt='shuffle' />
                : <InfinitySvg width="39px" height="39px" />
              }
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