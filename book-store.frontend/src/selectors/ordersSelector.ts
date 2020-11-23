import {RootState} from '../index';
import {createSelector} from '@reduxjs/toolkit';

const orders = (state:RootState) => state.order;

export const getOrderSelector = createSelector(orders, data => data.orders);
export const getIsLoadingSelector = createSelector(orders, data => data.loading);
