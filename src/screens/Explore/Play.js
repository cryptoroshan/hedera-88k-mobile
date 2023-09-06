import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Box, HStack, Image, Stack, Text, VStack } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';
import { useSelector } from 'react-redux';

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

import { getRequest, postRequest } from "../../components/apiRequests";
import * as env from "../../../env";


let num = 0;

const Play = ({ navigation, route }) => {
  const { music } = route.params;
  const user = useSelector(state => state.user);

  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackPosition, setPlaybackPosition] = useState(0);
  const [playbackDuration, setPlaybackDuration] = useState(null);
  const [voiceUserInfo, setVoiceUserInfo] = useState("");
  const [beatUserInfo, setBeatUserInfo] = useState("");
  const [vocalUserInfo, setVocalUserInfo] = useState("");


  useEffect(() => {
    getMusicAsync();
    getMusicInfo();
  }, [])

  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  const getMusicAsync = async () => {
    const { sound } = await Audio.Sound.createAsync({ uri: "https://api.brunoailabs.art/api/88k/audio?name=" + music.title });
    setSound(sound);
    await sound.playAsync();
    setIsPlaying(true);
    num = 0;
  }

  const getMusicInfo = async () => {
    const _musicInfo = await getRequest(
      env.SERVER_URL + "/api/88k/get_music_info?music_name=" + music.title
    );
    if (!_musicInfo) {
      Alert.alert("Something wrong with server!");
      return;
    }
    if (!_musicInfo.result) {
      Alert.alert(_musicInfo.error);
      return;
    }
    console.log(_musicInfo);
    setVoiceUserInfo(_musicInfo.data.voiceUserInfo);
    setBeatUserInfo(_musicInfo.data.beatUserInfo);
    setVocalUserInfo(_musicInfo.data.vocalUserInfo);
  };

  const payHbar = async () => {
    console.log("payHbar");
    const _res = await postRequest(env.SERVER_URL + "/api/88k/pay_hbar", {
      username: user.username,
      voice_user: voiceUserInfo.username,
      beat_user: beatUserInfo.username,
      vocal_user: vocalUserInfo.username,
    });
    if (!_res) {
      Alert.alert("Something wrong with server!");
      return;
    }
    if (!_res.result) {
      Alert.alert(_res.error);
      return;
    }
  };

  const handlePlayPause = async () => {
    if (sound === null) {
      // const { sound } = await Audio.Sound.createAsync(
      //   require('../../../assets/audio/audio_test.mp3')
      // );
      // const { sound } = await Audio.Sound.createAsync({ uri: "https://api.brunoailabs.art/api/88k/audio?name=" + music.title });
      // setSound(sound);
      // await sound.playAsync();
      // setIsPlaying(true);
    } else {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSliderSeek = async (value) => {
    await sound.setPositionAsync(value);
    setPlaybackPosition(value);
  };

  const handlePlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      setPlaybackDuration(status.durationMillis);
      setPlaybackPosition(status.positionMillis);
    }
  };

  useEffect(() => {
    if (sound !== null) {
      const interval = setInterval(async () => {
        const status = await sound.getStatusAsync();
        handlePlaybackStatusUpdate(status);
        if (status.isPlaying === true) {
          num++;
          if (num === 10) {
            console.log("onTimeUpdate");
            num = 0;
            payHbar();
          }
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [sound]);

  const formatTime = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const formattedPosition = formatTime(playbackPosition);
  const formattedDuration = formatTime(playbackDuration);

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
              style={{ width: "100%" }}
              value={playbackPosition}
              maximumValue={playbackDuration}
              onSlidingComplete={handleSliderSeek}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#FFFFFF80"
              thumbTintColor="#F8F8F8"
            />
            <HStack justifyContent="space-between">
              <Text fontFamily="Archivo" fontSize={10} color={COLOR.primary}>{formattedPosition}</Text>
              <Text fontFamily="Archivo" fontSize={10} color={COLOR.primary}>{formattedDuration}</Text>
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
            <TouchableOpacity onPress={handlePlayPause}>
              {!isPlaying ? (
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