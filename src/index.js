import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import App from './App';

import { ChakraProvider } from '@chakra-ui/react'
import {myNewTheme} from './styles/theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <ChakraProvider theme={myNewTheme}>
    <App />
  </ChakraProvider>
</BrowserRouter>
);

