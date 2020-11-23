import {all} from 'redux-saga/effects'
import {booksSaga} from '../sagas/booksSaga'
import {userSaga} from '../sagas/userSaga';
import {ordersSaga} from '../sagas/ordersSaga';

export default function* rootSaga() {
	yield all([
		booksSaga(),
		userSaga(),
		ordersSaga(),
	])
}
