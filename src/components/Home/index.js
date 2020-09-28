import React from 'react';
import {
  Button, StyleSheet, Text, View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Home</Text>
    <Button title="Go To Search" onPress={() => navigation.navigate('Search')} />
  </View>
);

export default Home;
