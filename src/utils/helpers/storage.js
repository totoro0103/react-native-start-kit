import AsyncStorage from '@react-native-community/async-storage';

const keys = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
};

const set = async (key, value) => {
  let success = true;
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    success = false;
  }
  return success;
};

const get = (key) => AsyncStorage.getItem(key);

const remove = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    // Error retrieving data
  }
};

const clear = async () => {
  try {
    await AsyncStorage.removeItem();
  } catch (error) {
    // Error retrieving data
  }
};

export default {
  get, set, remove, clear, keys,
};
