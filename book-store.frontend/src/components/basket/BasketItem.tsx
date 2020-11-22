import React, {ChangeEvent} from 'react';
import {Book} from '../../types/CommonTypes';

interface IBasketItemProps {
	item: {
		book: Book,
		count: number
	}
	changeCount: (id: number, count: number) => void;
}

export const BasketItem: React.FC<IBasketItemProps> = (props) => {
	const {item, changeCount} = props;
	const changeCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
		changeCount(parseInt(e.target.value), item.book.id)
	}
	return <tr>
		<td>
			<h3 className="is-size-5">{item.book.title}</h3>
			<p className="has-text-grey-light">{item.book?.author?.lastName}</p>
			<p className="has-text-grey-light">{item.book.category?.name}</p>
		</td>
		<td className="has-text-right ">
			<div className="columns">
				<div className="column is-offset-8 is-4">
					<input
						className="input"
						type="number"
						value={item.count}
						onChange={changeCountHandler}
					/>
				</div>
			</div>
		</td>
		<td className="has-text-right">{item.book.price}</td>
	</tr>
}
