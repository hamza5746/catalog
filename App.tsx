/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {AppNavigation} from './src/navigation/AppNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider} from 'react-native-paper';
import {ThemeProp} from 'react-native-paper/lib/typescript/types';
import {LightTheme} from './src/theme/themes';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {store} from './src/redux/store';
import { Provider } from 'react-redux';

// const store = store()
const client= new QueryClient();

const App=()=> {
  
  const theme = {
    ...LightTheme,
  } as ThemeProp;

  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <QueryClientProvider client={client}>
          <Provider store={store}>
          <AppNavigation />
          </Provider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
