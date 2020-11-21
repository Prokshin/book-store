import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit'
import booksSliceReducer from '../slices/booksSlice';
const slice = createSlice({
	name: 'test',
	initialState: 0,
	reducers: {
		increment: (state, action: PayloadAction<number>) => state + action.payload
	}
})

export const store = configureStore({
	reducer: {
		books: booksSliceReducer
	}
})
export type RootState = ReturnType<typeof store.getState>
