import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Book, Order, OrderDetail} from '../types/CommonTypes';


interface IOrderSliceState {
	orders: Order[];
	selectedOrder: OrderDetail | null;
	loading: boolean;
}

const initialState: IOrderSliceState = {
	orders: [],
	selectedOrder: null,
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
		},
		fetchOrderDetailRequest: (state, action) => {
			state.loading = true;
		},
		fetchOrderDetailSuccess: (state, action) => {
			state.selectedOrder = action.payload;
			state.loading = false;
		}
	}
})

export const actions = orderSlice.actions
export default orderSlice.reducer
