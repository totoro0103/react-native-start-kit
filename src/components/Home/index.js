import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import Overlay from '../common/Overlay';
import useOverlay from '../../utils/hooks/useOverlay';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

const Home = () => {
  const [showAlert] = useOverlay();

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          showAlert(<Overlay />);
        }}
        title="abc"
      />
      <Text>Home</Text>
      <Overlay />
      <TextInput placeholder="abc" />
    </View>
  );
};

export default Home;
