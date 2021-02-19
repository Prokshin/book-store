import axios from 'axios';
import {Order, OrderDetail, orderStatus, User} from '../types/CommonTypes';
import {toast} from 'react-hot-toast';


const defaultHeaders = {
	Authorization: `Bearer ${localStorage.getItem('token')}`,
	'Content-Type': 'application/json'
}

axios.interceptors.response.use(response => {
	return response;
}, error => {
	if (error.response.status === 401) {
		localStorage.removeItem('token')
	}
	if (error.response.status === 400) {
		toast.error('ошибка, попробуйте повоторить запрос')
	}
	return error;
});

export const getAllbooks = async (): Promise<any> => {
	const res = await axios({
		url: 'https://localhost:5001/api/books',
		method: 'GET',
		headers: {...defaultHeaders}
	})
	return res.data;
}

export const getToken = async (data: { email: string, password: string }): Promise<any> => {
	const res = await axios({
		url: 'https://localhost:5001/token',
		method: 'POST',
		data: data
	})
	return res.data
}

export const registration = async (data: { email: string, password: string, firstName: string, lastName: string, address: string }): Promise<any> => {
	const res = await axios({
		url: 'https://localhost:5001/registration',
		method: 'POST',
		data: data
	})
	return res.data
}

export const getUser = async (): Promise<User | undefined> => {
	try {
		const res = await axios({
			url: 'https://localhost:5001/api/user/current',
			method: 'GET',
			headers: {...defaultHeaders}
		})
		return res.data;
	}
	catch (e){
		console.log(e)
	}
}


export const getOrders = async (): Promise<Order[]> => {
	const res = await axios({
		url: 'https://localhost:5001/api/orders/',
		method: 'GET',
		headers: {...defaultHeaders}
	})

	return res.data
}

export const getOrderDetail = async (id: string): Promise<OrderDetail> => {
	const res = await axios({
		url: `https://localhost:5001/api/orders/${id}/detail`,
		method: 'GET',
		headers: {...defaultHeaders}
	})
	return res.data
}

export const updateOrderStatus = async (id: number, status: orderStatus): Promise<number> => {
	const res = await axios({
		url: `https://localhost:5001/api/orders/${id}`,
		method: 'PATCH',
		headers: {...defaultHeaders},
		data: JSON.stringify({"status": status})
	})

	return res.data
}

export const createOrder = async (userId: number, items: {bookId: number, quantity: number}[]): Promise<number> => {
	const res = await axios({
		url: 'https://localhost:5001/api/orders/',
		method: 'POST',
		data: {
				userId: userId,
				items: items.map(item => ({bookId: item.bookId, quantity: item.quantity}))
			},
		headers: {...defaultHeaders}
	})

	return res.data;
}
