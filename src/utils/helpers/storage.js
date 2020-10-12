import AsyncStorage from '@react-native-community/async-storage';

const keys = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
  THEME_MODE: 'THEME_MODE',
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

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value !== null) {
      return value;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
  }
  return '';
};

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
