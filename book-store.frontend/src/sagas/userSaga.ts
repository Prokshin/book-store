import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {actions} from '../slices/userSlice';
import {getAllbooks, getToken, getUser} from '../dataProvider/booksDataContext';
import {toast} from 'react-hot-toast';

function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


export function* userSaga() {
	yield takeEvery(actions.loginRequest, _login);
	yield takeLatest(actions.loginError, _clearLoginInfo);
	yield takeEvery(actions.checkLocalStorage, _checkLocalStorage);
	yield takeEvery(actions.fetchUserRequest, _fetchUser)

}

function* _fetchUser() {
	try {
		const user = yield call(getUser)
		yield put(actions.fetchUserSuccess(user))
	} catch {

	}

}

function* _login(action: any) {
	try {
		const data = yield call(getToken, action.payload);

		if(data){
			yield localStorage.setItem('token', data.access_token);
			yield document.location.assign('/');
		}
		else {
			toast.error('Непавильный email или пароль')
			// yield put(actions.loginError(''))

		}

	} catch {
		yield put(actions.loginError(''))

	}
}

function* _checkLocalStorage() {
	try {
		const token = yield localStorage.getItem('token');
		if (token) {
			yield put(actions.loginSuccess(''))
		}
	} catch (e) {

	}
}

function* _clearLoginInfo() {
	try {
		yield localStorage.removeItem('token');
		// yield document.location.assign('/');
	}catch (e){

	}
}
