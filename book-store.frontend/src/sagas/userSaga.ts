import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {actions} from '../slices/userSlice';
import {getAllbooks, getToken} from '../dataProvider/booksDataContext';

function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export function* userSaga() {
	yield takeEvery(actions.loginRequest, _login);
	yield takeEvery(actions.checkLocalStorage, _checkLocalStorage)
}

function* _login(action: any) {
	try {
		// const books = yield call(getAllbooks);
		const gg = yield call(getToken, action.payload);
		localStorage.setItem('token', gg.access_token);
		yield put(actions.loginSuccess(''));
	} catch {
		yield put(actions.loginError(''))
	}
}

function* _checkLocalStorage() {
	try {
		const token = yield localStorage.getItem('token');
		if(token)
		{
			yield put(actions.loginSuccess(''))
		}
	} catch (e) {

	}
}
