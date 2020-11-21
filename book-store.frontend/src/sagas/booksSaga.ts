import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {actions} from '../slices/booksSlice';
import {getAllbooks} from '../dataProvider/booksDataContext';

function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export function* booksSaga() {
	yield takeEvery(actions.fetchBooksRequest, _fetchBooks);
}

function* _fetchBooks() {
	try {
		const gg = yield call(getAllbooks);
		console.log(gg)
		const books =  [
			{
				id: 1,
				title: "Чапаев и Пустоиа",
				price: 220,
				description: '1231234235 23 df asfd asdfa sdf 4fasd',
				category: {
					id: 1,
					name: 'Современная проза'
				},
				author: {
					id: 1,
					firstName: "Виктор",
					lastName: 'Пелевин'
				}
			},
			{
				id: 2,
				title: "Чапаев и Пустоиа",
				price: 220,
				description: '1231234235 23 df asfd asdfa sdf 4fasd',
				category: {
					id: 1,
					name: 'Современная проза'
				},
				author: {
					id: 1,
					firstName: "Виктор",
					lastName: 'Пелевин'
				}
			},
		]
		yield delay(3000)
		yield put(actions.fetchBooksSuccess(gg));
	}
	catch {

	}
}
