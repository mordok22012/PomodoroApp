import React from 'react'
import ReactDOM from "react-dom";
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }
`;


ReactDOM.render(<React.StrictMode>
  <GlobalStyles />
   <App />
</React.StrictMode>,  document.getElementById("root"));

