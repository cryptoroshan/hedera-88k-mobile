import React from "react";
import { Box, FlatList, HStack, Image, Stack, Text, VStack } from "native-base";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

// Constants
import { COLOR } from "../../constants/Color";

// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const compositions = [
  {
    id: 1,
    title: "Chill Jazz",
    name: "Daveed",
  },
  {
    id: 2,
    title: "In the Car",
    name: "Vela",
  },
  {
    id: 3,
    title: "Focus",
    name: "Imman",
  },
  {
    id: 4,
    title: "Gaming",
    name: "John",
  },
];

const artists = [
  {
    id: 1,
    title: "Today's Pick",
    image: require("../../../assets/images/voices/1.png")
  },
  {
    id: 2,
    title: "Trending Songs",
    image: require("../../../assets/images/songs/1.png")
  },
  {
    id: 3,
    title: "Trending Voices",
    image: require("../../../assets/images/voices/2.png")
  },
  {
    id: 4,
    title: "Trending Beats",
    image: require("../../../assets/images/beats/1.png")
  },
];

const producers = [
  {
    id: 1,
    title: "Summber Songs",
  },
  {
    id: 2,
    title: "Workout Songs",
  },
  {
    id: 3,
    title: "Happy Songs",
  },
  {
    id: 4,
    title: "Sad Songs",
  },
];

const genre = [
  {
    id: 1,
    title: "Top Hiphop",
  },
  {
    id: 2,
    title: "TOP R&B",
  },
  {
    id: 3,
    title: "Top Pop",
  },
  {
    id: 4,
    title: "Top EDM",
  },
];

const Explore = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, width: "100%", backgroundColor: COLOR.black }}>
        <ScrollView flex={1}>
          <Header navigation={navigation} routeName="ExploreScreen" />
          <VStack justifyContent="space-between" space={10} marginY={5}>
            <HStack justifyContent="space-between" space={2} paddingX={5}>
              <Box style={{
                width: "50%",
                height: 90,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#3787FF"
              }}>
                <Text style={styles.cardTitle}>New Release</Text>
              </Box>
              <Box style={{
                width: "50%",
                height: 90,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FF6262"
              }}>
                <Text style={styles.cardTitle}>Charts</Text>
              </Box>
            </HStack>
            <Stack>
              <Text style={styles.rowTitle}>Featured 88K Compositions</Text>
              <FlatList
                data={compositions}
                horizontal
                style={{ paddingVertical: 15 }}
                renderItem={({ item, index }) => {
                  return (
                    <Box style={{
                      width: 180,
                      height: 151,
                      borderRadius: 14,
                      justifyContent: "center",
                      alignItems: "center",
                      // backgroundColor: "#3787FF",
                      marginLeft: index === 0 ? 20 : 9,
                      marginRight: index === compositions.length - 1 ? 20 : 0,
                    }}>
                      <LinearGradient
                        colors={['rgba(0, 194, 255, 0.50)', 'rgba(0, 194, 255, 0.00)']}
                        locations={[0, 178.1249964237213 / 360]}
                        start={[0.5, 0.5]}
                        end={[0, 0]}
                        style={{ flex: 1, width: "100%", height: "100%", borderRadius: 14, position: "absolute" }}
                      />
                      <LinearGradient
                        colors={['rgba(0, 194, 255, 0.50)', 'rgba(0, 194, 255, 0.00)']}
                        locations={[0, 178.1249964237213 / 360]}
                        start={[0.5, 0.5]}
                        end={[1, 0]}
                        style={{ flex: 1, width: "100%", height: "100%", borderRadius: 14, position: "absolute" }}
                      />
                      <Text style={styles.cardTitle}>{item.title}</Text>
                    </Box>
                  )
                }}
              />
            </Stack>
            <Stack>
              <Text style={styles.rowTitle}>TRENDING Artist</Text>
              <FlatList
                data={artists}
                horizontal
                style={{ paddingVertical: 15 }}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity onPress={() => navigation.navigate("PlayExploreScreen", { artist: item })}>
                      <Box style={{
                        width: 180,
                        height: 151,
                        borderRadius: 16,
                        justifyContent: "center",
                        alignItems: "center",
                        paddingHorizontal: 30,
                        marginLeft: index === 0 ? 20 : 9,
                        marginRight: index === artists.length - 1 ? 20 : 0,
                      }}>
                        <Stack style={styles.cardImage}>
                          <Image
                            source={item.image}
                            opacity={0.8}
                            width="100%"
                            height="100%"
                            borderRadius="11px"
                            alt={item.title}
                          />
                        </Stack>
                        <Text style={styles.cardTitle} numberOfLines={2}>{item.title}</Text>
                      </Box>
                    </TouchableOpacity>
                  )
                }}
              />
            </Stack>
            <Stack>
              <Text style={styles.rowTitle}>TRENDING Producer</Text>
              <FlatList
                data={producers}
                horizontal
                style={{ paddingVertical: 15 }}
                renderItem={({ item, index }) => {
                  return (
                    <Box style={{
                      width: 180,
                      height: 151,
                      borderRadius: 14,
                      backgroundColor: "#00D1FF",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: index === 0 ? 20 : 9,
                      marginRight: index === artists.length - 1 ? 20 : 0,
                    }}>
                      <Text style={styles.cardTitle} numberOfLines={2}>{item.title}</Text>
                    </Box>
                  )
                }}
              />
            </Stack>
            <Stack>
              <Text style={styles.rowTitle}>Genre</Text>
              <FlatList
                data={genre}
                horizontal
                style={{ paddingVertical: 15 }}
                renderItem={({ item, index }) => {
                  return (
                    <Box style={{
                      width: 180,
                      height: 151,
                      borderRadius: 14,
                      backgroundColor: "#00D1FF",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#9EFF00CC",
                      marginLeft: index === 0 ? 20 : 9,
                      marginRight: index === artists.length - 1 ? 20 : 0,
                    }}>
                      <Text style={styles.cardTitle} numberOfLines={2}>{item.title}</Text>
                    </Box>
                  )
                }}
              />
            </Stack>
          </VStack>
        </ScrollView>
      </SafeAreaView>
      <Footer navigation={navigation} routeName={"HomeScreen"} />
    </>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    fontFamily: "Archivo-Bold",
    fontSize: 15,
    color: COLOR.white,
    textTransform: "uppercase",
    textAlign: "center"
  },
  rowTitle: {
    fontFamily: "Archivo-Bold",
    fontSize: 15,
    color: COLOR.white,
    textAlign: "center",
  },
  cardImage: {
    position: "absolute",
    width: 180,
    height: 151,
    overflow: "hidden",
  },
});

export default Explore;