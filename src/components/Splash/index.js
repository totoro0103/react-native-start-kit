import React from 'react';
import {
  View, Text, StyleSheet, ActivityIndicator,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

const Splash = () => (
  <View style={styles.container}>
    <Text>Splash Screen</Text>
    <ActivityIndicator size="large" />
  </View>
);

export default Splash;
