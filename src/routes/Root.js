import React, { useEffect, useState } from 'react';
import {
  Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Toast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../components/Search';
import SignIn from '../components/SignIn';
import styles from './styles';
import { clearNetworkFail } from '../redux/actions/share';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: 'Sign In' }}
    />
  </AuthStack.Navigator>
);

const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Search" component={Search} />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

const Root = () => {
  const { sendNetworkFail } = useSelector((state) => state.share);
  const dispatch = useDispatch();
  const clearNetworkStatus = () => dispatch(clearNetworkFail());

  if (sendNetworkFail.err) {
    switch (sendNetworkFail.err) {
      case 'NETWORK_ERROR':
        Toast.show('No network connection, please try again');
        break;
      case 'TIMEOUT_ERROR':
        Toast.show('Timeout, please try again');
        break;
      case 'CONNECTION_ERROR':
        Toast.show('DNS server not found, please try again');
        break;
      default:
        Toast.show(sendNetworkFail.err);
        break;
    }
    clearNetworkStatus();
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior="padding" style={styles.mainContainer}>
        <NavigationContainer>
          <RootStackScreen userToken="abc" />
        </NavigationContainer>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

  );
};

export default Root;
