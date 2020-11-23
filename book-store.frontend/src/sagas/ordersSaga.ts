import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {actions} from '../slices/orderSlice';
import {
	getAllbooks,
	getOrderDetail,
	getOrders,
	getToken,
	getUser,
	updateOrderStatus
} from '../dataProvider/booksDataContext';
import {PayloadAction} from '@reduxjs/toolkit';

function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export function* ordersSaga() {
	yield takeEvery(actions.fetchOrdersRequest, _fetchOrders);
	yield takeEvery(actions.fetchOrderDetailRequest, _fetchDetailOrder);
	yield takeLatest(actions.updateOrderStatus, _updateOrder)
}


function* _updateOrder({payload}: PayloadAction<any>) {
	try {
		const id = yield call(updateOrderStatus, payload.id, payload.status );
		yield put(actions.fetchOrderDetailRequest({id}));
	}catch (e) {

	}
}

function* _fetchDetailOrder({payload}: PayloadAction<any>) {
	try {
		const order = yield call(getOrderDetail, payload.id)
		yield put(actions.fetchOrderDetailSuccess(order));
	} catch (e) {
	}
}

function* _fetchOrders() {
	try {
		const orders = yield call(getOrders)
		yield put(actions.fetchOrdersSuccess(orders))
	} catch {

	}
}
