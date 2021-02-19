import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBooksSelector, getIsLoadingSelector} from '../../selectors/booksSelectors';
import {BooksItem} from './BooksItem';
import {actions} from '../../slices/booksSlice';
import {actions as basketActions} from '../../slices/basketSlice';
import {getBasketSelector} from '../../selectors/basketSelector';
import Select from 'react-select';
import {Book} from '../../types/CommonTypes';
import {Loading} from '../common/Loading';

const SORT_OPTIONS =[
	{value: 1, label: 'по названию'},
	{value: 2, label: 'по количеству'},
	{value: 3, label: 'по имени автора'},
	{value: 4, label: 'по категории'},
	{value: 5, label: 'по цене'},
]

const sortTitle = (a: Book,b:Book)=> a?.title > b?.title ? 1 : -1;
const sortAuthor = (a: Book,b:Book)=> (a?.author?.lastName || '') > (b?.author?.lastName || '') ? 1 : -1;
const sortCategory = (a: Book,b:Book)=> (a?.category?.name || '') > (b?.category?.name  || '') ? 1 : -1;
const sortQantity = (a: Book,b:Book)=> a?.quantity > b?.quantity ? 1 : -1;
const sortPrice = (a: Book,b:Book)=> a?.price > b?.price ? 1 : -1;

export const BooksList: React.FC<any> = React.memo(() => {

	const dispatch = useDispatch();
	const books = useSelector(getBooksSelector);
	const isLoading = useSelector(getIsLoadingSelector);
	const basket = useSelector(getBasketSelector);

	const [sort, setSort] = useState<{value: string | number; label: string}>(SORT_OPTIONS[0])

	useEffect(() => {
		dispatch(actions.fetchBooksRequest());
	}, [])

	const addToBasket = (id: number) => {
		dispatch(basketActions.addBook({
			book: books.find(el => el.id === id),
			count: 1
		}))
	}
	const checkBasket = useCallback((id: number) => {
		const gg = basket.list.find(el => el.book.id === id)
		return gg?.count || 0;
	},[basket])


	const ChoiceSort: any = useCallback((a: Book,b: Book) => {
		switch (sort?.value) {
			case 1: return sortTitle(a, b)
			case 2: return sortQantity(a, b)
			case 3: return sortAuthor(a, b)
			case 4: return sortCategory(a, b)
			case 5: return sortPrice(a, b)
			default: return  sortTitle(a, b)
		}
	},[sort])

	const booksCount = books?.length;

	const finalBooks = useMemo( () => [...books]?.sort(ChoiceSort),[ChoiceSort, booksCount])

	return (
		<>


			<Select
				options={SORT_OPTIONS}
				value={sort}
				onChange={(e: any)=>setSort(e)}
			/>
			<Loading loading={isLoading}/>

			<div className="columns is-multiline mt-5">
				{
					finalBooks?.map(book => (
						<BooksItem
							key={book.id}
							id={book.id}
							quantity={book.quantity}
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
})
