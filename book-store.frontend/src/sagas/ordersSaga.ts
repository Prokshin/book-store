import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {actions} from '../slices/orderSlice';
import {getAllbooks, getOrders, getToken, getUser} from '../dataProvider/booksDataContext';

function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


export function* ordersSaga() {
	yield takeEvery(actions.fetchOrdersRequest, _fetchOrders);
}

function* _fetchOrders() {
	try {
		const orders = yield call(getOrders)
		yield put(actions.fetchOrdersSuccess(orders))
	} catch {

	}
}
