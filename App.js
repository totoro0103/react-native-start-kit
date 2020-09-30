import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import { ThemeProvider } from 'react-native-elements';
import Root from './src/routes/Root';
import rootReducer from './src/redux/reducers';
import { fontFamily } from './src/constant/common';

const theme = {
  Button: {
    containerStyle: {
      width: 200,
    },
    titleStyle: {
      textTransform: 'uppercase',
    },
  },
};

const customTextProps = {
  style: {
    fontFamily: fontFamily.regular,
    fontSize: 20,
    color: '#253137',
  },
};

const customTextInputProps = {
  style: {
    fontFamily: fontFamily.regular,
    fontSize: 20,
    color: '#253137',
  },
};

setCustomTextInput(customTextInputProps);

setCustomText(customTextProps);
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  </Provider>

);

export default App;
