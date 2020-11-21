import React from 'react';
import {useSelector} from 'react-redux';
import {getBooksSelector, getIsLoadingSelector} from '../../selectors/booksSelectors';
import {BooksItem} from './BooksItem';

export const BooksList = () => {
	const books = useSelector(getBooksSelector);
	const isLoading = useSelector(getIsLoadingSelector)
	return (
		<div className="columns is-multiline ">
			{
				books?.map(book => (
					<BooksItem
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
	)
}
