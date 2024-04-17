/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AppNavigation} from './src/navigation/AppNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider} from 'react-native-paper';
import {ThemeProp} from 'react-native-paper/lib/typescript/types';
import {LightTheme} from './src/theme/themes';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const client= new QueryClient();
const App=()=> {
  
  const theme = {
    ...LightTheme,
  } as ThemeProp;
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <QueryClientProvider client={client}>
          <AppNavigation />
        </QueryClientProvider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
