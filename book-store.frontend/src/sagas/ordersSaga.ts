import {call, put, takeEvery, takeLatest, select} from 'redux-saga/effects'
import {actions} from '../slices/orderSlice';
import {actions as basketActions} from '../slices/basketSlice';
import {
	createOrder,
	getAllbooks,
	getOrderDetail,
	getOrders,
	getToken,
	updateOrderStatus
} from '../dataProvider/booksDataContext';
import {PayloadAction} from '@reduxjs/toolkit';
import {Simulate} from 'react-dom/test-utils';
import {getBasketSelector} from '../selectors/basketSelector';
import {getUser} from '../selectors/userSelector'
import {Basket} from '../types/CommonTypes';


function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export function* ordersSaga() {
	yield takeEvery(actions.fetchOrdersRequest, _fetchOrders);
	yield takeEvery(actions.fetchOrderDetailRequest, _fetchDetailOrder);
	yield takeLatest(actions.updateOrderStatus, _updateOrder);
	yield takeEvery(actions.createOrder, _createOrder)
}

function* _createOrder({payload}: PayloadAction<any>)
{
	try {
		const {history} = payload;
		const user = yield select(getUser)
		const basket: Basket =yield select(getBasketSelector)
		const id = yield call(createOrder, user.id, basket.list.map(item => ({bookId: item.book.id, quantity: item.count})))
		yield put(basketActions.clearBasket())

		history.push(`/orders/${id}`);
	}
	catch (e) {

	}
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
