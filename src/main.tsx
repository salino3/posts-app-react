import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import { MyProvider } from './core';
import App from './App'
import './global.styles';
// npm install --save @vitejs/plugin-react-swc react react-dom react-scripts typescript


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <MyProvider>
     <App />
    </MyProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
