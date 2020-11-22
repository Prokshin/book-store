import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Basket, Book} from '../types/CommonTypes';


interface IBasketSliceState {
	basket: Basket;
	loading: boolean;
}

const initialState: IBasketSliceState = {
	basket: {
		list: [],
		price: 0
	},
	loading: false
}

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addBook: (state, action) => {
			const bookIndex = state.basket.list.findIndex(el => action.payload.book.id === el.book.id)
			if (bookIndex !== -1) {
				state.basket.price += action.payload.book.price;
				state.basket.list[bookIndex].count += 1;
			}
			else {
				state.basket.list.push({
					book: action.payload.book,
					count: action.payload.count
				})
				state.basket.price += action.payload.book.price * action.payload.count
			}
		},
		addCount: (state, action) => {
			const {id, count} = action.payload;
			console.log(id, count)
			const bookIndex = state.basket.list.findIndex(el => id === el.book.id)
			console.log(bookIndex)
			if(bookIndex !== -1){
				console.log('g')
				if(count === 0 ) {
					console.log('q')
					state.basket.list.splice(bookIndex, 1)
				}
				else {
					console.log('w')
					state.basket.list[bookIndex].count = count;
				}
			}
			state.basket.price = state.basket.list.reduce((acc, r) => acc + r.book.price * r.count ,0)
		}
	}
})

export const actions = basketSlice.actions
export default basketSlice.reducer
