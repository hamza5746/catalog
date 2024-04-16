/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import { AppNavigation } from './src/navigation/AppNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from "react-native-paper"
import { ThemeProp } from 'react-native-paper/lib/typescript/types';
import { LightTheme } from './src/theme/themes';
import DrawerScreen from './src/navigation/Drawer';
import Drawer from './src/navigation/Drawer';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const theme = {
    ...LightTheme
  } as ThemeProp
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider >
        <AppNavigation/>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
