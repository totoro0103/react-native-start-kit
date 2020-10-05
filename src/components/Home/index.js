import React from 'react';
import {
  StyleSheet, View, Text, TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

const Home = () => (
  <View style={styles.container}>
    <Text>Home</Text>
    <TextInput placeholder="abc" />
  </View>
);

export default Home;
