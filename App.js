import React, { useEffect } from "react";
import { NativeBaseProvider, StatusBar, extendTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import NavigationService from "./src/services/NavigationService";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import RootNavigation from "./src/navigation";

import { store, persistor } from './src/state/store';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Archivo": require('./assets/fonts/Archivo-Regular.ttf'),
    "Archivo-Thin": require("./assets/fonts/Archivo-Thin.ttf"),
    "Archivo-Medium": require("./assets/fonts/Archivo-Medium.ttf"),
    "Archivo-SemiBold": require('./assets/fonts/Archivo-SemiBold.ttf'),
    "Archivo-Bold": require('./assets/fonts/Archivo-Bold.ttf'),
    "Archivo-ExtraBold": require('./assets/fonts/Archivo-ExtraBold.ttf'),
  });

  useEffect(() => {
    (async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    })()
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const theme = extendTheme({
    components: {
      Text: {
        baseStyle: {
          fontFamily: "Archivo",
        },
        defaultProps: {},
      }
    }
  });

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NativeBaseProvider theme={theme}>
          <StatusBar translucent backgroundColor="transparent" />
          <NavigationContainer
            ref={(ref) => NavigationService.setTopLevelNavigator(ref)}
          >
            <RootNavigation />
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}
