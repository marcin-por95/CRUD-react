import React from 'react';
import App from './App';
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";


const rootElement = document.querySelector('#root');

createRoot(rootElement).render(
    <BrowserRouter>
        <Provider store={store}>
            <App>
                <div>hello world</div>
            </App>
        </Provider>
    </BrowserRouter>
);


