import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Book} from '../types/CommonTypes';


interface IBookSliceState {
	books: Book[];
	loading: boolean;
}

const initialState: IBookSliceState = {
	books: [],
	loading: false
}

export const bookSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		fetchBooksRequest: (state) => {
			state.loading = true;
		},
		fetchBooksSuccess: (state, action) => {
			state.books = action.payload;
			state.loading = false;
		}
	}
})

export const actions = bookSlice.actions
export default bookSlice.reducer
