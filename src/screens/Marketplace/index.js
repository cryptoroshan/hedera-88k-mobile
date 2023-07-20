import React, { useCallback, useEffect, useState } from "react";
import { Dimensions, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Box, FlatList, HStack, Stack, Image, Text, VStack, Center } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Constants
import { COLOR } from "../../constants/Color";
import { BeatsData, SongsData, VoicesData } from "../../constants/static";

const { width, height } = Dimensions.get("window");

const Marketplace = ({ navigation }) => {

  const [selectedVoice, setSelectedVoice] = useState(null);
  const [selectedBeats, setSelectedBeats] = useState(null);
  const [selectedBeatItem, setSelectedBeatItem] = useState(null);
  const [selectedSong, setSelectedSong] = useState(null);
  const [selectedItems, setSelectedItems] = useState(null);

  const CardComponent = useCallback(() => (
    <HStack width="100%" marginY="15px" height="150px">
      <TouchableOpacity
        onPress={() => {
          setSelectedBeats(null);
          setSelectedBeatItem(null);
        }}
        style={{
          width: 135,
          height: 150,
          paddingHorizontal: 3,
          paddingVertical: 3,
          borderWidth: 1,
          borderColor: COLOR.gray3,
          borderRadius: 12,
          marginLeft: 15,
          backgroundColor: COLOR.yellow, zIndex: 99
        }}
      >
        <Stack width="100%" height={100} overflow="hidden">
          <Image source={selectedBeats.image} width="100%" height="100%" borderRadius="10px" alt={selectedBeats.name} />
        </Stack>
        <Stack style={{ marginTop: 10 }}>
          <Text style={{
            fontFamily: "Archivo-SemiBold",
            fontSize: 12,
            lineHeight: 16,
            textAlign: "center",
            textTransform: "capitalize",
          }} numberOfLines={1}>
            {selectedBeats.name}
          </Text>
          <Text style={{
            fontFamily: "Archivo",
            fontSize: 8,
            lineHeight: 9,
            textAlign: "center",
            letterSpacing: 3,
            textTransform: "uppercase"
          }}>
            beats
          </Text>
        </Stack>
      </TouchableOpacity>
      <VStack space="4px">
        <Stack width={width * 2 / 3 - 15} height="73px">
          <FlatList
            data={selectedBeats?.list}
            horizontal
            renderItem={({ item, index }) => {
              if (index % 2 === 0) {
                return (
                  <TouchableOpacity
                    onPress={() => item.id === selectedBeatItem?.id ? setSelectedBeatItem(null) : setSelectedBeatItem(item)}
                  >
                    <Box style={{
                      width: width / 4,
                      height: 73,
                      paddingHorizontal: 2,
                      paddingVertical: 2,
                      borderWidth: 1,
                      borderColor: COLOR.gray3,
                      borderRadius: 8,
                      marginRight: 4,
                      marginLeft: index === 0 ? 10 : 0,
                      backgroundColor: item.id === selectedBeatItem?.id ? COLOR.yellow : COLOR.black
                    }}>
                      <Stack width="100%" overflow="hidden" height={item.id === selectedBeatItem?.id ? "8px" : "48px"}>
                        <Image source={item.image} width="100%" height="100%" borderRadius="8px" alt={item.title} />
                      </Stack>
                      <Text
                        fontFamily="Archivo-SemiBold"
                        fontSize={9}
                        color={item.id === selectedBeatItem?.id ? COLOR.black : COLOR.white}
                        numberOfLines={1}
                        textAlign="center"
                        lineHeight={10}
                        marginTop={item.id === selectedBeatItem?.id ? "10px" : "5px"}
                      >
                        {item.title}
                      </Text>
                      {
                        item.id === selectedBeatItem?.id &&
                        <Stack>
                          <Text style={{
                            fontFamily: "Archivo",
                            fontSize: 8,
                            lineHeight: 9,
                            textAlign: "center",
                            letterSpacing: 3,
                            textTransform: "uppercase", fontSize: 6, lineHeight: 11, color: COLOR.black
                          }}>
                            beat
                          </Text>
                          <Text
                            fontFamily="Archivo-SemiBold" fontSize={9} numberOfLines={2} textAlign="center"
                            lineHeight={10} color={item.id === selectedBeatItem?.id ? COLOR.black : COLOR.white}
                          >
                            25% Royalty Off Streams
                          </Text>
                        </Stack>
                      }
                    </Box>
                  </TouchableOpacity>
                )
              }
            }}
          />
        </Stack>
        <Stack width={width * 2 / 3 - 15} height="73px">
          <FlatList
            data={selectedBeats?.list}
            horizontal
            renderItem={({ item, index }) => {
              if (index % 2 === 1) {
                return (
                  <TouchableOpacity
                    onPress={() => item.id === selectedBeatItem?.id ? setSelectedBeatItem(null) : setSelectedBeatItem(item)}
                  >
                    <Box style={{
                      width: width / 4,
                      height: 73,
                      paddingHorizontal: 2,
                      paddingVertical: 2,
                      borderWidth: 1,
                      borderColor: COLOR.gray3,
                      borderRadius: 8,
                      marginRight: 4,
                      marginLeft: index === 1 ? 10 : 0,
                      backgroundColor: item.id === selectedBeatItem?.id ? COLOR.yellow : COLOR.black
                    }}>
                      <Stack width="100%" overflow="hidden" height={item.id === selectedBeatItem?.id ? "8px" : "48px"}>
                        <Image source={item.image} width="100%" height="100%" borderRadius="8px" alt={item.title} />
                      </Stack>
                      <Text
                        fontFamily="Archivo-SemiBold"
                        fontSize={9}
                        color={item.id === selectedBeatItem?.id ? COLOR.black : COLOR.white}
                        numberOfLines={1}
                        textAlign="center"
                        lineHeight={10}
                        marginTop={item.id === selectedBeatItem?.id ? "10px" : "5px"}
                      >
                        {item.title}
                      </Text>
                      {
                        item.id === selectedBeatItem?.id &&
                        <Stack>
                          <Text style={{
                            fontFamily: "Archivo",
                            fontSize: 8,
                            lineHeight: 9,
                            textAlign: "center",
                            letterSpacing: 3,
                            textTransform: "uppercase", fontSize: 6, lineHeight: 11, color: COLOR.black
                          }}>
                            beat
                          </Text>
                          <Text fontFamily="Archivo-SemiBold" fontSize={9} numberOfLines={2} textAlign="center"
                            lineHeight={10} color={item.id === selectedBeatItem?.id ? COLOR.black : COLOR.white}
                          >
                            25% Royalty Off Streams
                          </Text>
                        </Stack>
                      }
                    </Box>
                  </TouchableOpacity>
                )
              }
            }}
          />
        </Stack>
      </VStack>
    </HStack>
  ), [selectedBeats, selectedBeatItem]);

  useEffect(() => {
    let items = [];
    if (selectedVoice) items.push(selectedVoice);
    if (selectedBeatItem) {
      let beat = selectedBeatItem;
      beat.name = selectedBeats.name;
      beat.type = selectedBeats.type;
      items.push(beat);
    }
    if (selectedSong) items.push(selectedSong);
    setSelectedItems(items);
  }, [selectedVoice, selectedBeatItem, selectedSong]);

  const createContract = () => {
    if (selectedVoice || selectedBeatItem || selectedSong) {
      navigation.navigate("ContractsScreen", { data: selectedItems });
    } else {
      console.log("Select Item!");
    }
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.black }}>
        <ScrollView flex={1}>
          <Header navigation={navigation} routeName="MarketplaceScreen" />
          <Stack style={{ width: "100%" }}>
            <TouchableOpacity onPress={() => navigation.navigate("VoicesScreen")}>
              <Text style={styles.title}>VOICES</Text>
            </TouchableOpacity>
            <FlatList
              data={VoicesData}
              horizontal
              paddingY="15px"
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity key={`voice-${index}`}
                    onPress={() => item.id === selectedVoice?.id ? setSelectedVoice(null) : setSelectedVoice(item)}
                  >
                    <Box style={{
                      width: 135,
                      height: 150,
                      paddingHorizontal: 3,
                      paddingVertical: 3,
                      borderWidth: 1,
                      borderColor: COLOR.gray3,
                      borderRadius: 12,
                      marginLeft: 15,
                      marginRight: index === VoicesData.length - 1 ? 15 : 0,
                      backgroundColor: (item.id === selectedVoice?.id) ? COLOR.yellow : COLOR.black
                    }}>
                      <Stack style={item.id === selectedVoice?.id ? styles.activeCardImage : styles.cardImage}>
                        <Image source={item.image} width="100%" height="100%" borderRadius="11px" alt={item.name} />
                      </Stack>
                      <Stack style={{ marginTop: item.id === selectedVoice?.id ? 30 : 10 }}>
                        <Text numberOfLines={1}
                          style={{
                            fontFamily: "Archivo-SemiBold",
                            fontSize: 12,
                            lineHeight: 16,
                            textAlign: "center",
                            textTransform: "capitalize",
                            color: item.id === selectedVoice?.id ? COLOR.black : COLOR.white
                          }}
                        >
                          {item.name}
                        </Text>
                        <Text style={{
                          fontFamily: "Archivo",
                          fontSize: 8,
                          lineHeight: 9,
                          textAlign: "center",
                          letterSpacing: 3,
                          textTransform: "uppercase", color: item.id === selectedVoice?.id ? COLOR.black : COLOR.white
                        }}>
                          voice
                        </Text>
                      </Stack>
                      {item.id === selectedVoice?.id &&
                        <Text style={{
                          fontFamily: "Archivo-SemiBold",
                          fontSize: 12,
                          lineHeight: 16,
                          textAlign: "center",
                          textTransform: "capitalize",
                          color: COLOR.black, marginTop: 20
                        }}>
                          50% Royalty Off Streams
                        </Text>
                      }
                    </Box>
                  </TouchableOpacity>
                );
              }}
            />
          </Stack>
          <Stack style={{ width: "100%", marginTop: 30 }}>
            <TouchableOpacity onPress={() => navigation.navigate("BeatsScreen")}>
              <Text style={styles.title}>BEATS</Text>
            </TouchableOpacity>
            {
              selectedBeats ?
                <CardComponent />
                :
                <FlatList
                  data={BeatsData}
                  horizontal
                  paddingY="15px"
                  renderItem={({ item, index }) => {
                    return (
                      <TouchableOpacity key={`${index}-beats`} onPress={() => setSelectedBeats(item)}>
                        <Box style={{
                          width: 135,
                          height: 150,
                          paddingHorizontal: 3,
                          paddingVertical: 3,
                          borderWidth: 1,
                          borderColor: COLOR.gray3,
                          borderRadius: 12,
                          marginLeft: 15,
                          marginRight: index === BeatsData.length - 1 ? 15 : 0,
                          backgroundColor: (item.id === selectedBeats?.id) ? COLOR.yellow : COLOR.black
                        }}>
                          <Stack width="100%" height={100} overflow="hidden">
                            <Image source={item.image} width="100%" height="100%" borderRadius="10px" alt={item.name} />
                          </Stack>
                          <Stack style={{ marginTop: 10 }}>
                            <Text numberOfLines={1}
                              style={{
                                fontFamily: "Archivo-SemiBold",
                                fontSize: 12,
                                lineHeight: 16,
                                textAlign: "center",
                                textTransform: "capitalize",
                                color: item.id === selectedBeats?.id ? COLOR.black : COLOR.white
                              }}
                            >
                              {item.name}
                            </Text>
                            <Text style={{
                              fontFamily: "Archivo",
                              fontSize: 8,
                              lineHeight: 9,
                              textAlign: "center",
                              letterSpacing: 3,
                              textTransform: "uppercase", color: item.id === selectedBeats?.id ? COLOR.black : COLOR.white
                            }}>
                              beats
                            </Text>
                          </Stack>
                        </Box>
                      </TouchableOpacity>
                    );
                  }}
                />
            }
          </Stack>
          <Stack style={{ width: "100%", marginTop: 30 }}>
            <TouchableOpacity onPress={() => navigation.navigate("SongsScreen")}>
              <Text style={styles.title}>SONGS</Text>
            </TouchableOpacity>
            <FlatList
              data={SongsData}
              horizontal
              paddingY="15px"
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity key={`songs-${index}`}
                    onPress={() => item.id === selectedSong?.id ? setSelectedSong(null) : setSelectedSong(item)}
                  >
                    <Box style={{
                      width: 135,
                      height: 150,
                      paddingHorizontal: 3,
                      paddingVertical: 3,
                      borderWidth: 1,
                      borderColor: COLOR.gray3,
                      borderRadius: 12,
                      marginLeft: 15,
                      height: 180,
                      marginRight: index === SongsData.length - 1 ? 15 : 0,
                      backgroundColor: (item.id === selectedSong?.id) ? COLOR.yellow : COLOR.black
                    }}>
                      <Stack style={item.id === selectedSong?.id ? styles.activeCardImage : styles.cardImage}>
                        <Image source={item.image} width="100%" height="100%" borderRadius="11px" alt={item.name} />
                      </Stack>
                      <Stack style={{ marginTop: item.id === selectedSong?.id ? 30 : 15 }}>
                        <Text numberOfLines={1}
                          style={{
                            fontFamily: "Archivo-SemiBold",
                            lineHeight: 16,
                            textAlign: "center",
                            letterSpacing: -0.4,
                            color: item.id === selectedSong?.id ? COLOR.black : COLOR.white,
                            fontSize: item.id === selectedSong?.id ? 8 : 10,
                            textTransform: item.id === selectedSong?.id ? "uppercase" : "capitalize"
                          }}
                        >
                          {item.name}
                        </Text>
                        <Text numberOfLines={1}
                          style={{
                            fontFamily: "Archivo-SemiBold",
                            fontSize: 14,
                            lineHeight: 20,
                            textAlign: "center",
                            textTransform: "capitalize",
                            color: item.id === selectedSong?.id ? COLOR.black : COLOR.white
                          }}
                        >
                          {item.title}
                        </Text>
                        <Text style={{
                          fontFamily: "Archivo",
                          fontSize: 8,
                          lineHeight: 10,
                          textAlign: "center",
                          letterSpacing: 3,
                          textTransform: "uppercase",
                          color: item.id === selectedSong?.id ? COLOR.black : COLOR.white
                        }}>
                          song
                        </Text>
                      </Stack>
                      {item.id === selectedSong?.id &&
                        <Text style={{
                          fontFamily: "Archivo-SemiBold",
                          fontSize: 12,
                          lineHeight: 16,
                          textAlign: "center",
                          textTransform: "capitalize",
                          color: COLOR.black, marginTop: 20
                        }}>
                          25% Royalty Off Streams
                        </Text>
                      }
                    </Box>
                  </TouchableOpacity>
                );
              }}
            />
          </Stack>
          <Center>
            <TouchableOpacity onPress={createContract} style={styles.createBtn}>
              <Text fontFamily="Archivo-Bold" textTransform="uppercase" color={COLOR.black}>
                Create
              </Text>
            </TouchableOpacity>
          </Center>
        </ScrollView>
      </SafeAreaView >
      <Footer navigation={navigation} routeName="HomeScreen" />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Archivo-Bold",
    fontSize: 12,
    color: COLOR.white,
    marginLeft: 15,
    textDecorationLine: "underline",
  },
  cardImage: {
    width: "100%",
    height: 100,
    overflow: "hidden",
  },
  activeCardImage: {
    width: "100%",
    height: 20,
    overflow: "hidden",
  },
  createBtn: {
    width: "35%",
    height: 50,
    borderRadius: 100,
    backgroundColor: COLOR.white,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },
});

export default Marketplace;