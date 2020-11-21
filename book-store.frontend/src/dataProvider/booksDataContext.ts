import {Book} from '../types/CommonTypes';
import axios from 'axios';


export const getAllbooks = async (): Promise<any> => {
	// const res = await fetch('https://localhost:5001/api/books')
	const res = await axios({
		url: 'https://localhost:5001/api/books',
		method: 'GET'
	})
	return res.data;
}
