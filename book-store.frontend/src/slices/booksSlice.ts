import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Book} from '../types/CommonTypes';


interface IBookSliceState {
	books: Book[];
	loading: boolean;
}

const initialState: IBookSliceState = {
	books: [
		{
			id: 1,
			title: "Чапаев и Пустоиа",
			price: 220,
			category: {
				id: 1,
				name: 'Современная проза'
			},
			author: {
				id: 1,
				firstName: "Виктор",
				lastName: 'Пелевин'
			}
		}
	],
	loading: false
}

export const bookSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {

	}
})

export const actions = bookSlice.actions
export default bookSlice.reducer
