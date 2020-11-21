import {RootState} from '../core/store';
import {createSelector} from '@reduxjs/toolkit';

const books = (state:RootState) => state.books;

export const getBooksSelector = createSelector(books, data => data.books);
export const getIsLoadingSelector = createSelector(books, data => data.loading);
