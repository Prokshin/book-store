import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Book, User} from '../types/CommonTypes';


interface IUserSliceState {
	user: User | null;
	isLogin: boolean;
	loading: boolean;
}

const initialState: IUserSliceState = {
	user: null,
	isLogin: false,
	loading: false
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginRequest: (state, action) => {
			state.loading = true;
		},
		loginSuccess: (state, action) => {
			state.isLogin = true;
			state.loading = false;
		},
		loginError: (state, action) => {
			state.isLogin = false;
			state.loading = false;
		},
		checkLocalStorage: (state, action) => {},
		resetLogin: (state, action) => {
			state.user = null;
			state.isLogin = false;
			state.loading = false;
		},
		fetchUserRequest: (state, action) => {},
		fetchUserSuccess: ((state, action) => {
			state.user = action.payload;
		})
	}
})

export const actions = userSlice.actions
export default userSlice.reducer
