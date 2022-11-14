import useCachedResources from './hooks/useCachedResources';
// import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import React, { useEffect, useState } from "react";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';

import { Provider } from 'react-redux';
import { Store } from './redux/store';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [fontsLoaded] = useFonts({
    'AbhayaLibre-Medium': require('./assets/fonts/AbhayaLibre-Medium.ttf'),
    'AbhayaLibre-Bold': require('./assets/fonts/AbhayaLibre-Bold.ttf'),
    'AbhayaLibre-Regular': require('./assets/fonts/AbhayaLibre-Regular.ttf'),
  });  
  const loadFont = async() => {
    try {
      fontsLoaded
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    loadFont();
  }, []);

  LogBox.ignoreLogs(['expo-app-loading is deprecated in favor of expo-splash-screen: use SplashScreen.preventAutoHideAsync() and SplashScreen.hideAsync() instead. https://docs.expo.dev/versions/latest/sdk/splash-screen/'])
  LogBox.ignoreLogs(['Possible Unhandled Promise Rejection (id: 0):'])
  LogBox.ignoreLogs(['AsyncStorage'])

  if (!isLoadingComplete || !fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    );
  }
}