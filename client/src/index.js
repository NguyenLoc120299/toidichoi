import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DataProvider from './redux/store'
import { ChakraProvider } from '@chakra-ui/react'
import "react-image-lightbox/style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'rc-rate/assets/index.css';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
