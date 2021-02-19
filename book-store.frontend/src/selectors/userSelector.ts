import {RootState} from '../index';
import {createSelector} from '@reduxjs/toolkit';

const user = (state:RootState) => state.user;

export const getIsLogin = createSelector(user, data => data.isLogin);
export const getUser = createSelector(user, data => data.user)
export const getError = createSelector(user, data => data.isError)
// export const getIsLoadingSelector = createSelector(books, data => data.loading);
