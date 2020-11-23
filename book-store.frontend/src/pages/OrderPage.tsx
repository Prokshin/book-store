import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from '../slices/orderSlice';
import {getOrderDetailSelector} from '../selectors/ordersSelector';
import {OrderItem} from '../components/order/OrderItem';
import {orderStatus} from '../types/CommonTypes';


export const OrderPage = () => {
	let {id} = useParams<any>();
	const dispatch = useDispatch();
	// console.log(p)
	const order = useSelector(getOrderDetailSelector);

	useEffect(() => {
		dispatch(actions.fetchOrderDetailRequest({id: parseInt(id)}))
	}, [])


	const changeStatus = () => {
		if(order) dispatch(actions.updateOrderStatus({id: parseInt(id), status: order.status + 1}));
	}

	if (!order) return null;
	return (
		<>
			<div className="card">
				<header className="card-header">
					<p className="card-header-title is-size-4">Заказ номер: {order.id}</p>
				</header>
				<div className="card-content">
					<table className="table is-fullwidth">
						<thead>
						<tr>
							<th>Название книги</th>
							<th className="has-text-right">Количество</th>
							<th className="has-text-right">стоимость</th>
						</tr>
						</thead>
						<tbody>
						{
							order.orderItems.map(orderItem => (
								<OrderItem orderItem={orderItem}/>
							))
						}
						</tbody>
						<tfoot>
						<tr className="is-size-5">
							<td>Итог</td>
							<td className="has-text-right">{order.orderItems.reduce((acc, r) => acc + r.quantity, 0)}</td>
							<td className="has-text-right">{order.orderItems.reduce((acc, r) => acc + r.book.price * r.quantity, 0)}</td>
						</tr>
						</tfoot>
					</table>
				</div>
			</div>
			<div className="section">
				{
					order.status === orderStatus.New
						? <button className="button is-success" onClick={changeStatus}>Подтвердить информация о заказе</button>
						: order.status === orderStatus.Processing
							? <button className="button is-success" onClick={changeStatus}>Оплатить заказ</button>
							: order.status === orderStatus.Paid
								? <button className="button is-success" onClick={changeStatus}>Подтвердить получение</button>
								: <h1 className="title has-text-success is-size-2" onClick={changeStatus}>Заказ получен</h1>

				}

			</div>
		</>
	)
}
