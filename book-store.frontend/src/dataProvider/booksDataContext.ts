import axios from 'axios';
import {Order, OrderDetail, orderStatus, User} from '../types/CommonTypes';

const defaultHeaders = {
	Authorization: `Bearer ${localStorage.getItem('token')}`,
	'Content-Type': 'application/json'
}


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

export const getUser = async (): Promise<User> => {
	const res = await axios({
		url: 'https://localhost:5001/api/user/current',
		method: 'GET',
		headers: {...defaultHeaders}
	})

	return res.data;
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
