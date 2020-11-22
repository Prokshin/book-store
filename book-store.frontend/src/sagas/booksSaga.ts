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
		const books = yield call(getAllbooks);
		yield put(actions.fetchBooksSuccess(books));
	}
	catch {

	}
}
