import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBasketSelector} from '../selectors/basketSelector';
import {actions} from '../slices/basketSlice';
import {BasketItem} from '../components/basket/BasketItem';

export const BasketPage = () => {
	const dispatch = useDispatch();

	const basket = useSelector(getBasketSelector)

	const changeCountHandler = (count: number, id: number) => {
		dispatch(actions.addCount({id, count}))
	}

	return (
		<>
			<h1 className="title is-size-2">Корзина</h1>
			{
				basket.list?.length
					? <><table className="table is-fullwidth">
						<thead>
						<tr>
							<th>Книга</th>
							<th className="has-text-right">Количество</th>
							<th className="has-text-right">Стоимость</th>
						</tr>
						</thead>
						<tbody>
						{
							basket.list?.map(el => (
								<BasketItem item={el} changeCount={changeCountHandler}/>
							))
						}

						</tbody>
						<tfoot>
						<tr className="is-size-5">
							<td>Итог</td>
							<td className="has-text-right">{basket.list.reduce((acc, r) => acc + r.count, 0)}</td>
							<td className="has-text-right">{basket.price}</td>
						</tr>
						</tfoot>
					</table>
						<div className="columns">
							<div className="column is-4 is-offset-8 has-text-right">
								<button className=" button is-success">
									Оформить заказ
								</button>
							</div>
						</div></>
					: <h1>Корзина пуста</h1>
			}

		</>
	)
}
