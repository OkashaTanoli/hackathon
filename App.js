import React from 'react';
import Navig from './src/components/nav'
import store from './src/store/index'
import {Provider} from 'react-redux'


const App  = () => {
  return (
    <Provider store={store}>
      <Navig />
    </Provider>
  );
};


export default App;
