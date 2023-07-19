import React, { useState } from "react";
import { Box, HStack, Input, Text, VStack, useToast } from "native-base";
import { ScrollView, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";
import * as DocumentPicker from "expo-document-picker";
import { useSelector } from 'react-redux';
import * as FileSystem from 'expo-file-system';

// Icons
import { PublishIcon } from "../../constants/icons";

// Components
import Footer from "../../components/Footer";
import { postRequest } from "../../components/apiRequests";
import * as env from "../../../env";

// Constants
import { COLOR } from "../../constants/Color";

// Utils
import showToast from "../../utils/showToast";

const Publish = ({ navigation }) => {
  const user = useSelector( state => state.user);

  const toast = useToast();

  const [music, setMusic] = useState(null);
  const [title, setTitle] = useState(null);
  const [art, setArt] = useState(null);
  const [video, setVideo] = useState(null);

  const pickAndUploadMusic = async () => {
    try {
      const fileResult = await DocumentPicker.getDocumentAsync({
        type: "image/*"
      });
      if (fileResult.type === "success")
        setMusic({ name: fileResult.name, uri: fileResult.uri });
    } catch (error) {
      console.log(error);
    }
  };

  const pickAndUploadArt = async () => {
    try {
      const fileResult = await DocumentPicker.getDocumentAsync({
        type: "image/*"
      });
      if (fileResult.type === "success")
        setArt({ name: fileResult.name, uri: fileResult.uri });
    } catch (error) {
      console.log(error);
    }
  };

  const pickAndUploadVideo = async () => {
    try {
      const fileResult = await DocumentPicker.getDocumentAsync({
        type: "image/*"
      });
      if (fileResult.type === "success")
        setVideo({ name: fileResult.name, uri: fileResult.uri });
    } catch (error) {
      console.log(error);
    }
  };

  const checkValidation = () => {
    if (music === null) {
      toast.show({
        render: () => {
          return <Box bg="warning.500" px="2" py="1" rounded="sm" mb={5}>
                  Upload Music File!
                </Box>;
        }
      });
      return false;
    } else if (title === null || title === "") {
      toast.show({
        render: () => {
          return <Box bg="warning.500" px="2" py="1" rounded="sm" mb={5}>
                  Input Title of Music!
                </Box>;
        }
      });
      return false;
    } else if (art === null) {
      toast.show({
        render: () => {
          return <Box bg="warning.500" px="2" py="1" rounded="sm" mb={5}>
                  Upload Art Image!
                </Box>;
        }
      });
      return false;
    } else {
      return true;
    }
  };

  const next = async () => {
      try {
          const isValidation = checkValidation();
          if (isValidation) {
            let uploadData = {
              music: music,
              title: title,
              art: art,
              video: video
            };
//            navigation.navigate("ProgressionScreen", uploadData);
          }

          // upload music
          const _musicRes = await FileSystem.uploadAsync(env.SERVER_URL + "/api/88k/music-upload", music.uri, {
            fieldName: 'file',
            httpMethod: 'PATCH',
            uploadType: FileSystem.FileSystemUploadType.BINARY_CONTENT,
          });
          // uploaded music name
          const uploadedMusicName = JSON.parse(_musicRes.body).data;

          // upload art
          const _artRes = await FileSystem.uploadAsync(env.SERVER_URL + "/api/88k/art-upload", art.uri, {
            fieldName: 'file',
            httpMethod: 'PATCH',
            uploadType: FileSystem.FileSystemUploadType.BINARY_CONTENT,
          });
          // uploaded art name
          const uploadedArtName = JSON.parse(_artRes.body).data;

          // upload video
          const _videoRes = await FileSystem.uploadAsync(env.SERVER_URL + "/api/88k/video-upload", video.uri, {
            fieldName: 'file',
            httpMethod: 'PATCH',
            uploadType: FileSystem.FileSystemUploadType.BINARY_CONTENT,
          });
          // uploaded video name
          const uploadedVideoName = JSON.parse(_videoRes.body).data;

          const _postData = {
              username: user.username,
              music: uploadedMusicName,
              musicTitle: title,
              art: uploadedArtName,
              video: uploadedVideoName
          };
          const _res = await postRequest(env.SERVER_URL + "/api/88k/upload_publish_info", _postData);
          if (!_res) {
              Alert.alert("Error", "Something wrong with server!");
              return;
          }
          if (!_res.result) {
              Alert.alert("Error", _res.error);
              return;
          }
          navigation.navigate("ProgressionScreen");
      } catch (error) {
        console.log(error);
      }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView flex={1}>
        <Text style={styles.title}>Publish</Text>
        <VStack width="100%" paddingX="31px">
          <TouchableOpacity onPress={pickAndUploadMusic} style={styles.musicUpload}>
            <SvgXml xml={PublishIcon} width="19px" height="18px" />
            <Text style={styles.musicUploadText}>{ music === null ? "Upload your music file here" : music.name }</Text>
          </TouchableOpacity>
          <Text style={styles.description}>
            Our AI will scan your file and detect the voices, beats, and lyrics
            from 88K in the file you upload, and we will generate a fair pay
            formula for everybody involved in this piece.
          </Text>
          <Box marginTop="50px">
            <Text style={styles.label}>Title of your music</Text>
            <Input
              w={"100%"}
              h={"35px"}
              backgroundColor={COLOR.primary}
              color={COLOR.black}
              fontSize={16}
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </Box>
          <Box marginTop="32px">
            <Text style={styles.label}>Cover art for your music</Text>
            <TouchableOpacity onPress={pickAndUploadArt} style={styles.fileUpload}>
              <SvgXml xml={PublishIcon} width="19px" height="18px" />
              <Text style={styles.fileUploadText}>{ art === null ? "Upload 1 image here" : art.name }</Text>
            </TouchableOpacity>
          </Box>
          <Box marginTop="32px">
            <Text style={styles.label}>{`Video for your music (optional)`}</Text>
            <TouchableOpacity onPress={pickAndUploadVideo} style={styles.fileUpload}>
              <SvgXml xml={PublishIcon} width="19px" height="18px" />
              <Text style={styles.fileUploadText}>{ video === null ? "Upload 1 video here" : video.name }</Text>
            </TouchableOpacity>
          </Box>
        </VStack>
        <HStack width="100%" justifyContent="center" marginTop="33px" marginBottom="30px">
          <TouchableOpacity onPress={next} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </HStack>
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
    fontSize: 12,
    color: COLOR.white,
    lineHeight: 22,
    textAlign: "center",
  },
  musicUpload: {
    marginTop: 39,
    width: "100%",
    height: 135,
    borderWidth: 1,
    borderColor: COLOR.primary,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  musicUploadText: {
    marginTop: 35,
    fontFamily: "Archivo-Thin",
    fontSize: 12,
    color: COLOR.white,
  },
  description: {
    marginTop: 20,
    fontFamily: "Archivo-Thin",
    fontSize: 12,
    color: COLOR.white,
    lineHeight: 17,
  },
  label: {
    fontFamily: "Archivo",
    fontSize: 12,
    color: "#F8F8F899",
    letterSpacing: 0.12
  },
  fileUpload: {
    width: "100%",
    height: 94,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLOR.primary,
    borderRadius: 3
  },
  fileUploadText: {
    marginTop: 15,
    fontFamily: "Archivo-Thin",
    fontSize: 12,
    color: COLOR.white,
  },
  button: {
    width: 182,
    height: 38,
    borderRadius: 19,
    backgroundColor: COLOR.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "Archivo-Bold",
    fontSize: 12,
    color: COLOR.black,
  }
});

export default Publish;