import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "styled-components";
import {theme} from "./styled-components/general/theme";
import { Reset } from 'styled-reset'
import {GlobalStyle} from "./styled-components/general/globalStyle";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Reset/>
            <GlobalStyle/>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
