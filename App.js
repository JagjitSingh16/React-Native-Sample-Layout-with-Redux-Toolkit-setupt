/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Routes from './src/routes/Index';
import {Provider} from 'react-redux';
import store from './src/redux/Store/index';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
