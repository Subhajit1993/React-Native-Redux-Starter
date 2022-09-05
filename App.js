import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import store from './src/redux';
import * as SplashScreen from 'expo-splash-screen';
import Navigator from "./src/navigations/AppNavigation"

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect( () => {
    (async () => {
      await _handleFinishLoading()
    })();
    return () => {
      // this now gets called when the component unmounts
    };
  }, []);

  const _handleFinishLoading = async () => {
    setIsLoadingComplete(true)
    await SplashScreen.hideAsync();
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <Provider store={store}>
          <Navigator/>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
