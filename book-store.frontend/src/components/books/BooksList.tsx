import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBooksSelector, getIsLoadingSelector} from '../../selectors/booksSelectors';
import {BooksItem} from './BooksItem';
import {actions} from '../../slices/booksSlice';
import {actions as basketActions} from '../../slices/basketSlice';
import {Loading} from '../common/Loading';
import {getBasketSelector} from '../../selectors/basketSelector';

export const BooksList = () => {
	const dispatch = useDispatch();
	const books = useSelector(getBooksSelector);
	const isLoading = useSelector(getIsLoadingSelector);
	const basket = useSelector(getBasketSelector);

	useEffect(() => {
		dispatch(actions.fetchBooksRequest());
	}, [dispatch])

	const addToBasket = (id: number) => {
		dispatch(basketActions.addBook({
			book: books.find(el => el.id === id),
			count: 1
		}))
	}
	const checkBasket = (id: number) => {
		const gg = basket.list.find(el => el.book.id === id)
		return gg?.count || 0;
	}
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
							addToBasket={() => addToBasket(book.id)}
							checkBasket={checkBasket}
						/>
					))
				}
			</div>
		</>
	)
}
