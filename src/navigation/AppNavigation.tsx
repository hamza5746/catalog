import KeyUtils from "../utilities/keyUtils";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AnimeListView from "../views/AnimeListView";
import FavoritesView from "../views/FavoritesView";
import { DrawerHeaderProps } from "@react-navigation/drawer";
import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";
import Drawer from "./Drawer";
import DetailAnime from "../views/DetailAnime";

type RootStackParamList = {
  drawer:undefined;
  animeListView: undefined;
  favoritesView: undefined;
  detailAnime:{id:number};
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const SCREENS = {
  [KeyUtils.routes.drawer]: { screen: Drawer },
  [KeyUtils.routes.detailAnime]: { screen: DetailAnime },
};

export const AppNavigation = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'drawer'}
      >
          <Stack.Screen
              name={'drawer'}
              component={Drawer}
              options={{
                headerShown: false,
              }}
          />   
          <Stack.Screen
              name={'detailAnime'}
              component={DetailAnime}
              options={{
                headerShown: false,
              }}
          />   
        {/* {Object.entries(SCREENS).map((screen) => {
          const [key, value] = screen;
          return (
            <Stack.Screen
              key={key}
              name={key as keyof AppStackParams}
              component={value.screen}
              options={{
                headerShown: false,
              }}
            />
          );
        })} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

