import axios from 'axios';
import {User} from '../types/CommonTypes';

const defaultHeaders = {
	Authorization: `Bearer ${localStorage.getItem('token')}`
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
