import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ApolloProvider from "./ApolloProvider";
import {Provider} from "react-redux";

ReactDOM.render( (
    <Provider>
        <App />
    </Provider>

),  document.getElementById('root'))

