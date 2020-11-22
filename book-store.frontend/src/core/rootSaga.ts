import {all} from 'redux-saga/effects'
import {booksSaga} from '../sagas/booksSaga'
import {userSaga} from '../sagas/userSaga';

export default function* rootSaga() {
	yield all([
		booksSaga(),
		userSaga()
	])
}
