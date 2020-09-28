import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import Root from './src/routes/Root';
import rootReducer from './src/redux/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>

);

export default App;
