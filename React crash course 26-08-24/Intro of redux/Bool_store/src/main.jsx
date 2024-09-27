import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import React from 'react';
import { createRoot } from 'react-dom/client'; // Use 'react-dom/client' instead of 'react-dom'
import App from './App';
import { store } from './redux/store';

const root = createRoot(document.getElementById('root')); // Use 'createRoot' here
root.render(
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
);
