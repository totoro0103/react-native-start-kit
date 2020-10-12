import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../components/Home';
import Search from '../components/Search';
import Profile from '../components/Profile';

import colors from '../themes/colors';

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen
      name="Details"
      component={Home}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
  </HomeStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator
    initialRouteName="Profile"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Search') {
          iconName = focused ? 'search-outline' : 'search-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person-outline' : 'person-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.primary,
      inactiveTintColor: colors.boldGrey,
      allowFontScaling: true,
      keyboardHidesTabBar: true,
      labelStyle: {
        fontSize: 16,
      },
      iconStyle: {
        fontSize: 16,
        marginTop: 9,
      },
      style: {
        backgroundColor: '#f7f7f7',
        height: '10%',
      },
    }}
  >
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Search" component={Search} />
    <Tabs.Screen name="Profile" component={Profile} />
  </Tabs.Navigator>
);
export default TabsScreen;
