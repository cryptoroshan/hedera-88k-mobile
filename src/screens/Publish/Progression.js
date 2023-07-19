import React, { useState, useEffect } from "react";
import { Box, Divider, HStack, Image, Stack, Text, VStack } from "native-base";
import { ScrollView, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";
import { useSelector } from 'react-redux';

// Icons
import { ActiveRadioBtn, ActiveRadioIcon, RadioBtn, RadioIcon, dotIcon } from "../../constants/icons";

// Components
import Footer from "../../components/Footer";
import { postRequest } from "../../components/apiRequests";
import * as env from "../../../env";

// Constants
import { COLOR } from "../../constants/Color";
import { logos } from "../../constants/static";

const Progression = ({ navigation }) => {
  const user = useSelector( state => state.user);

  const [value, setValue] = useState(null);
  const [isAll, setIsAll] = useState(false);
  const [voiceScanSuccess, setVoiceScanSuccess] = useState(false);
  const [beatScanSuccess, setBeatScanSuccess] = useState(false);
  const [lyricScanSuccess, setLyricScanSuccess] = useState(false);
  const [smartContractGenerateSuccess, setSmartContractGenerateSuccess] = useState(false);
  const [canPublish, setCanPublish] = useState(false);

  useEffect(() => {
    checkScan();
  }, []);

  const checkScan = async () => {
    await voiceScan();
    await beatScan();
    await lyricScan();
    await generateSmartContract();
  }

  const voiceScan = async () => {
    const _res = await postRequest(env.SERVER_URL + "/api/88k/voice_scan");
    if (!_res) {
        Alert.alert("Error", "Something wrong with server!");
        return;
    }
    if (!_res.result) {
        Alert.alert("Error", _res.error);
        return;
    }
    setVoiceScanSuccess(true);
  }

  const beatScan = async () => {
    const _res = await postRequest(env.SERVER_URL + "/api/88k/beat_scan");
    if (!_res) {
        Alert.alert("Error", "Something wrong with server!");
        return;
    }
    if (!_res.result) {
        Alert.alert("Error", _res.error);
        return;
    }
    setBeatScanSuccess(true);
  }

  const lyricScan = async () => {
    const _res = await postRequest(env.SERVER_URL + "/api/88k/lyric_scan");
    if (!_res) {
        Alert.alert("Error", "Something wrong with server!");
        return;
    }
    if (!_res.result) {
        Alert.alert("Error", _res.error);
        return;
    }
    setLyricScanSuccess(true);
  }

  const generateSmartContract = async () => {
    const _postData = {
      username: user.username
    };
    const _res = await postRequest(env.SERVER_URL + "/api/88k/generate_smart_contract", _postData);
    if (!_res) {
        Alert.alert("Error", "Something wrong with server!");
        return;
    }
    if (!_res.result) {
        Alert.alert("Error", _res.error);
        return;
    }
    setSmartContractGenerateSuccess(true);
    setCanPublish(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView flex={1}>
        <Text style={styles.title}>Publish</Text>
        <Stack marginTop="39px" alignItems="center" width="100%">
          <VStack>
            <Stack marginBottom="12px">
              <HStack space={5}>
                <SvgXml xml={ voiceScanSuccess === true ? ActiveRadioIcon : RadioIcon } width={22} height={22} />
                <Stack>
                  <Text style={styles.lineTitle}>Voices scan complete</Text>
                  <Text style={styles.caption}>1 voice used | Ariana Grande</Text>
                </Stack>
              </HStack>
              <Divider orientation="vertical" height="40px" mt="-9px" mx="11px" _light={{ bg: "muted.400" }} _dark={{ bg: "muted.50" }} />
            </Stack>
            <Stack marginBottom="12px">
              <HStack space={5}>
                <SvgXml xml={ beatScanSuccess === true ? ActiveRadioIcon : RadioIcon } width={22} height={22} />
                <Stack>
                  <Text style={styles.lineTitle}>Beats scan complete</Text>
                  <Text style={styles.caption}>0 Beats used</Text>
                </Stack>
              </HStack>
              <Divider orientation="vertical" height="40px" mt="-9px" mx="11px" _light={{ bg: "muted.400" }} _dark={{ bg: "muted.50" }} />
            </Stack>
            <Stack marginBottom="12px">
              <HStack space={5}>
                <SvgXml xml={ lyricScanSuccess === true ? ActiveRadioIcon : RadioIcon } width={22} height={22} />
                <Stack>
                  <Text style={styles.lineTitle}>Lyrics scan complete</Text>
                  <Text style={styles.caption}>0 Lyrics used</Text>
                </Stack>
              </HStack>
              <Divider orientation="vertical" height="40px" mt="-9px" mx="11px" _light={{ bg: "muted.400" }} _dark={{ bg: "muted.50" }} />
            </Stack>
            <HStack space={5}>
              <SvgXml xml={ smartContractGenerateSuccess === true ? ActiveRadioIcon : RadioIcon } width={22} height={22} />
              <Text style={styles.lineTitle}>Smart contract generated!</Text>
            </HStack>
          </VStack>
          <Box style={styles.boxContainer}>
            <Text fontFamily="Archivo-Thin" color={COLOR.white} fontSize={40} lineHeight={40}>
              50%
            </Text>
            <Text fontFamily="Archivo" color={COLOR.white} fontSize={14} lineHeight={20} textAlign="center">
              of "music title"'s streaming revenue goes to YOU
            </Text>
          </Box>
          <VStack alignItems="center" space={3} marginTop={4}>
            <SvgXml xml={dotIcon} width={4} height={4} />
            <SvgXml xml={dotIcon} width={4} height={4} />
            <SvgXml xml={dotIcon} width={4} height={4} />
          </VStack>
          <Text fontFamily="Archivo-Bold" fontSize={16} color={COLOR.white} textTransform="uppercase" marginTop={4}>
            Publish On:
          </Text>
          <HStack>
            <VStack space={4} alignItems="flex-end" marginTop={8} mr={8}>
              {
                logos.map((item, index) =>
                  <TouchableOpacity key={index}
                    onPress={() => {
                      setValue(item);
                      setIsAll(false);
                    }}
                  >
                    <HStack alignItems="center" space={4}>
                      <Image source={item.logo} alt={`logo-${index}`} />
                      {value?.id === item.id ?
                        <SvgXml xml={ActiveRadioBtn} width={22} height={22} />
                        :
                        <SvgXml xml={RadioBtn} width={22} height={22} />
                      }
                    </HStack>
                  </TouchableOpacity>
                )
              }
              <TouchableOpacity
                onPress={() => {
                  setValue(null);
                  setIsAll(true);
                }}
              >
                <HStack alignItems="center" space={4}>
                  <Text style={styles.selectAll}>Select All</Text>
                  {isAll ?
                    <SvgXml xml={ActiveRadioBtn} width={22} height={22} />
                    :
                    <SvgXml xml={RadioBtn} width={22} height={22} />
                  }
                </HStack>
              </TouchableOpacity>
            </VStack>
          </HStack>
          <VStack alignItems="center" space={5} marginY={7}>
            <TouchableOpacity style={styles.button}>
              <Text fontFamily="Archivo-Medium" color={COLOR.black} fontSize={12}>View Terms and Conditions</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              disabled={ canPublish === true ? false : true }
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <Text fontFamily="Archivo-Bold" color={COLOR.black} fontSize={12}>PUBLISH</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.button, backgroundColor: "#F8F8F880" }}>
              <Text fontFamily="Archivo-Bold" color={COLOR.white} fontSize={12}>SAVE TO DRAFT</Text>
            </TouchableOpacity>
          </VStack>
        </Stack>
      </ScrollView>
      <Footer navigation={navigation} routeName={"PublishScreen"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.black,
    width: "100%",
  },
  title: {
    marginTop: 18,
    fontFamily: "Archivo-Bold",
    fontSize: 14,
    color: COLOR.white,
    lineHeight: 22,
    textAlign: "center",
  },
  lineTitle: {
    fontFamily: "Archivo-SemiBold",
    fontSize: 16,
    color: COLOR.white,
  },
  caption: {
    fontFamily: "Archivo-SemiBold",
    fontSize: 10,
    color: COLOR.white,
  },
  boxContainer: {
    marginTop: 30,
    width: 286,
    height: 113,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: COLOR.white,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 60
  },
  selectAll: {
    fontFamily: "Archivo-Bold",
    fontSize: 16,
    color: COLOR.primary,
    textTransform: "uppercase",
    marginTop: 2
  },
  button: {
    width: 198,
    height: 35,
    borderRadius: 24,
    backgroundColor: COLOR.primary,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default Progression;