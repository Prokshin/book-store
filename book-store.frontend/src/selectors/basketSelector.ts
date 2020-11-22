import {RootState} from '../index';
import {createSelector} from '@reduxjs/toolkit';

const basket = (state:RootState) => state.basket;

export const getBasketSelector = createSelector(basket, data => data.basket)
