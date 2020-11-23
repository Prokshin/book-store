import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'
import App from './App';
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';
// import {sagaMiddleware, store} from './core/store';
import {booksSaga} from './sagas/booksSaga';

import {configureStore, createSlice, getDefaultMiddleware, PayloadAction} from '@reduxjs/toolkit'
import booksSliceReducer from './slices/booksSlice';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './core/rootSaga';
import userSliceReducer, {actions} from './slices/userSlice';
import basketSliceReducer from './slices/basketSlice';
import {orderSlice} from './slices/orderSlice';
import axios from 'axios';


export const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
	middleware: [...getDefaultMiddleware(), sagaMiddleware],
	reducer: {
		books: booksSliceReducer,
		user: userSliceReducer,
		basket: basketSliceReducer,
		order: orderSlice.reducer
	}
})

export type RootState = ReturnType<typeof store.getState>

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);


sagaMiddleware.run(rootSaga)

const {dispatch} = store;

axios.interceptors.response.use(function (response) {
	return response;
}, function (error) {
	if (401 === error.response.status) {
		console.log('fddf')
		dispatch(actions.loginError(''));
	} else {
		return Promise.reject(error);
	}
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
