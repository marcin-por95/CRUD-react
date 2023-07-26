import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom'; // Poprawiona linia importu

const rootElement = document.querySelector('#root');

createRoot(rootElement).render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
