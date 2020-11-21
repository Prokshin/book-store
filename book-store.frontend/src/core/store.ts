import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit'
import booksSliceReducer from '../slices/booksSlice';
import createSagaMiddleware from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
	middleware: [sagaMiddleware],
	reducer: {
		books: booksSliceReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
