import {RootState} from '../index';
import {createSelector} from '@reduxjs/toolkit';

const books = (state:RootState) => state.user;

export const getIsLogin = createSelector(books, data => data.isLogin);
// export const getIsLoadingSelector = createSelector(books, data => data.loading);
