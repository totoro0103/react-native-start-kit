import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider } from 'react-native-elements';
import Root from './src/routes/Root';
import rootReducer from './src/redux/reducers';
import { fontFamily } from './src/constant/common';
import OverlayProvider from './src/utils/providers/OverlayProvider';
import { defaultTheme } from './src/themes/override';

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
    <AppearanceProvider>
      <ThemeProvider theme={defaultTheme}>
        <OverlayProvider>
          <Root />
        </OverlayProvider>
      </ThemeProvider>
    </AppearanceProvider>
  </Provider>
);

export default App;
