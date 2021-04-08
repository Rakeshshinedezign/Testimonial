import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './redux/App.js';
import store from './redux/store.js';



const Index = () => (
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);

export default Index;