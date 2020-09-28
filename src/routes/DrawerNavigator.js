import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../components/Home';
import Search from '../components/Search';
import colors from '../themes/colors';
import styles from './styles';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContentOptions={{
      activeTintColor: colors.primary,
      labelStyle: styles.textItemMenu,
    }}
  >
    <Drawer.Screen
      name="Home"
      component={Home}
      options={{ drawerLabel: 'Home' }}
    />
    <Drawer.Screen
      name="Search"
      component={Search}
      options={{ drawerLabel: 'Search' }}
    />
  </Drawer.Navigator>
);
export default DrawerNavigator;
