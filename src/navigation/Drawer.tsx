import 'react-native-gesture-handler';
import AnimeListView from '../views/AnimeListView';
import FavoritesView from '../views/FavoritesView';

import KeyUtils from '../utilities/keyUtils';
import {createDrawerNavigator} from '@react-navigation/drawer';

const DrawerNav = createDrawerNavigator();

const Drawer = ({theme}: any) => {
  return (
    <DrawerNav.Navigator
      initialRouteName={KeyUtils.routes.animeListView as keyof AppStackParams}>
      <DrawerNav.Screen
        name={KeyUtils.routes.animeListView}
        component={AnimeListView}
      />
      <DrawerNav.Screen
        name={KeyUtils.routes.favoritesView}
        component={FavoritesView}
      />
    </DrawerNav.Navigator>
  );
};

export default Drawer;
