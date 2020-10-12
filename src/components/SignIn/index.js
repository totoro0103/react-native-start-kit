import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { Button, Input } from 'react-native-elements';
import { useAuth } from '../../redux/hooks/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

const SignIn = () => {
  const { signIn, actions } = useAuth();

  return (
    <View style={styles.container}>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Button
        title="Sign in"
        loading={signIn.loading}
        onPress={() => actions.signIn({ email: '', password: '' })}
      />
    </View>
  );
};

export default SignIn;
