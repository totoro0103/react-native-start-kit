import React, { useEffect, useState } from 'react';
import {
  Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback,
} from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Toast from 'react-native-simple-toast';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { withTheme } from 'react-native-elements';
import Search from '../components/Search';
import SignIn from '../components/SignIn';
import styles from './styles';
import TabNavigator from './TabNavigator';
import Splash from '../components/Splash';
import { useAuth } from '../redux/hooks/auth';
import { useShare } from '../redux/hooks/share';
import storage from '../utils/helpers/storage';
import { handleSetTheme } from '../utils/helpers/common';
import { defaultTheme, darkTheme } from '../themes/override';
import { THEMES } from '../constant/common';

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

const Root = ({ updateTheme }) => {
  const [loading, setLoading] = useState(false);
  const { signIn, actions } = useAuth();
  const { themeSettings, actions: shareActions } = useShare();
  const scheme = useColorScheme();

  useEffect(() => {
    async function handleFetchUser() {
      const accessToken = await storage.get(storage.keys.ACCESS_TOKEN);
      const theme = await storage.get(storage.keys.THEME_MODE);
      updateTheme(theme === THEMES.DARK ? darkTheme : defaultTheme);
      shareActions.setTheme(theme);
      setLoading(true);
      if (accessToken) {
        setTimeout(() => {
          setLoading(false);
          actions.setSignInData({
            accessToken: 'accessToken',
            refreshToken: 'refreshToken',
          });
        }, 2000);
      } else {
        setLoading(false);
      }
    }
    handleFetchUser();
  }, []);

  useEffect(() => {
    const themeMode = handleSetTheme(themeSettings, Appearance.getColorScheme());
    updateTheme(themeMode === THEMES.DARK ? darkTheme : defaultTheme);
  }, [Appearance.getColorScheme()]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior="padding" style={styles.mainContainer}>
        <NavigationContainer theme={handleSetTheme(themeSettings, scheme) === 'dark' ? DarkTheme : DefaultTheme}>
          {loading ? <Splash /> : <RootStackScreen accessToken={signIn.accessToken} />}
        </NavigationContainer>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default withTheme(Root);
