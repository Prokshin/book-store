import {all} from 'redux-saga/effects'
import {booksSaga} from '../sagas/booksSaga'

export default function* rootSaga() {
	yield all([
		booksSaga(),
	])
}
