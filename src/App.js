import React from 'react';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import AppRoutes from './routes';
import './assets/styles/global.css'
import 'react-toastify/dist/ReactToastify.css'; // Toastify imprts
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
      <ToastContainer />
    </Provider>
  );
}

export default App;

