import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { debounce } from 'debounce';
import { saveState } from './Utils/localStorage';
import './index.css';

store.subscribe(debounce(() => saveState(store.getState()), 800));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
