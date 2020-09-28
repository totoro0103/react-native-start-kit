import React, { useEffect, useState } from 'react';
import { Keyboard, Platform, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../components/Home';
import Search from '../components/Search';
import DrawerNavigator from './DrawerNavigator';
import styles from './styles';
import { clearNetworkFail } from '../redux/actions/share';

const Stack = createStackNavigator();

const Root = () => {
  const sendNetworkFail = useSelector((state) => state.sendNetworkFail);
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const dispatch = useDispatch();
  const clearNetworkStatus = () => dispatch(clearNetworkFail());

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (e) => {
        setIsKeyboardShow(true);
        setKeyboardHeight(e.endCoordinates.height);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardShow(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

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
    <View style={styles.mainContainer}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Drawer" component={DrawerNavigator} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ gestureEnabled: true, gestureDirection: 'horizontal' }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{ gestureEnabled: true, gestureDirection: 'horizontal' }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      {/* Keyboard padding */}
      {isKeyboardShow && Platform.OS === 'ios' ? (
        <View style={{ height: keyboardHeight }} />
      ) : null}
    </View>
  );
};

export default Root;
