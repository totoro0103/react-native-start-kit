import React, { useEffect, useState } from 'react';
import {
  Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Toast from 'react-native-simple-toast';
import Search from '../components/Search';
import SignIn from '../components/SignIn';
import styles from './styles';
import TabNavigator from './TabNavigator';
import Splash from '../components/Splash';
import { useAuth } from '../redux/hooks/auth';
import storage from '../utils/helpers/storage';

const Drawer = createDrawerNavigator();

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
    />
  </AuthStack.Navigator>
);

const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Search" component={Search} />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ accessToken }) => (
  <RootStack.Navigator headerMode="none">
    {accessToken ? (
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
  const [loading, setLoading] = useState(false);
  const { signIn, actions } = useAuth();

  useEffect(() => {
    async function handleFetchUser() {
      const accessToken = await storage.get(storage.keys.ACCESS_TOKEN);
      if (accessToken) {
        setTimeout(() => {
          setLoading(false);
          actions.setSignInData({
            accessToken: 'accessToken',
            refreshToken: 'refreshToken',
          });
        }, 2000);
      }
    }handleFetchUser();
  }, []);

  // if (sendNetworkFail.err) {
  //   switch (sendNetworkFail.err) {
  //     case 'NETWORK_ERROR':
  //       Toast.show('No network connection, please try again');
  //       break;
  //     case 'TIMEOUT_ERROR':
  //       Toast.show('Timeout, please try again');
  //       break;
  //     case 'CONNECTION_ERROR':
  //       Toast.show('DNS server not found, please try again');
  //       break;
  //     default:
  //       Toast.show(sendNetworkFail.err);
  //       break;
  //   }
  //   clearNetworkStatus();
  // }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior="padding" style={styles.mainContainer}>
        <NavigationContainer>
          {loading ? <Splash /> : <RootStackScreen accessToken={signIn.accessToken} />}
        </NavigationContainer>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

  );
};

export default Root;
