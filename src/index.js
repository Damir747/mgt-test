import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';

import { Provider } from 'react-redux';
import rootReducer from './store/root-reducer';
import { configureStore } from '@reduxjs/toolkit';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({ reducer: rootReducer });


root.render(
	<Provider store={store}>
		<App />
	</Provider>
);

