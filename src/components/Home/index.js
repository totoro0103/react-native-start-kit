import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { Button, Input } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

const Home = () => (
  <View style={styles.container}>
    <Input placeholder="Email" />
    <Input placeholder="Password" />
    <Button title="Sign in" />
  </View>
);

export default Home;
