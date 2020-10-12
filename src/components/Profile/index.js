import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import { useAuth } from '../../redux/hooks/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

const Profile = () => {
  const { actions } = useAuth();
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          actions.signOut();
        }}
        title="Sign Out"
      />
    </View>
  );
};

export default Profile;
