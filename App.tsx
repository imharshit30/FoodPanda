/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import Main from './Main';
import {myStore} from './redux/store/Store';

const App = () => {
  return (
    <Provider store={myStore}>
      <Main />
    </Provider>
  );
};

export default App;
