import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/configureStore';
import LayoutDefault from './components/LayoutDefault';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <LayoutDefault>
          <App />
        </LayoutDefault>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
);
