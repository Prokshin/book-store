import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBooksSelector, getIsLoadingSelector} from '../../selectors/booksSelectors';
import {BooksItem} from './BooksItem';
import {actions} from '../../slices/booksSlice';
import {Loading} from '../common/Loading';

export const BooksList = () => {
	const dispatch = useDispatch();
	const books = useSelector(getBooksSelector);
	const isLoading = useSelector(getIsLoadingSelector);

	useEffect(() => {
		dispatch(actions.fetchBooksRequest());
	}, [dispatch])
	return (
		<>
			<Loading loading={isLoading}/>
			<div className="columns is-multiline ">
				{
					books?.map(book => (
						<BooksItem
							key={book.id}
							id={book.id}
							title={book.title}
							description={book.description || ''}
							price={book.price}
							authorName={`${book.author?.firstName} ${book.author?.lastName}`}
							categoryName={book.category?.name || ''}
						/>
					))
				}
			</div>
		</>
	)
}
