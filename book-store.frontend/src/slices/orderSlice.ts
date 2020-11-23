import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Book, Order} from '../types/CommonTypes';


interface IOrderSliceState {
	orders: Order[];
	loading: boolean;
}

const initialState: IOrderSliceState = {
	orders: [],
	loading: false
}

export const orderSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		fetchOrdersRequest: (state) => {
			state.loading = true;
		},
		fetchOrdersSuccess: (state, action) => {
			state.orders = action.payload;
			state.loading = false;
		}
	}
})

export const actions = orderSlice.actions
export default orderSlice.reducer
