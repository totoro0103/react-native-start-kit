/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {
  StyleSheet, View, Text, Button,
} from 'react-native';
import Modal from 'react-native-modal';

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});
const Overlay = ({ open, onClose }) => (
  <Modal testID="modal" isVisible={open}>
    <View style={styles.content}>
      <Text style={styles.contentTitle}>Hi 👋!</Text>
      <Button testID="close-button" title="Close" onPress={onClose} />
    </View>
  </Modal>
);

export default Overlay;
