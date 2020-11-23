import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from '../slices/orderSlice';
import {getOrderSelector} from '../selectors/ordersSelector';
import {getStatusName} from '../utils/stringHelpers';
import {format} from 'date-fns'

export const OrderListPage = () => {
	const dispatch = useDispatch();

	const orders = useSelector(getOrderSelector);

	useEffect(() => {
		dispatch(actions.fetchOrdersRequest())
	}, [dispatch])
	return (
		<>
			<h2 className="title is-size-2">Заказы</h2>
			<div className="columns is-multiline">
				{
					orders.map(order => (
						<div className="column is-6">
							<Link to='orders/1'>
								<div className="card">
									<header className="card-header">
										<p className="card-header-title level">
											<div className="level-left">
												<span className=" is-size-6 has-text-grey-light">Номер Заказа: </span>
											</div>
											<div className="level-right">
											<span className=" is-size-3 has-text-primary">{order.id}</span>
											</div>
										</p>
									</header>
									<div className="card-content">
										<div className="content">
											<p>Количество книг: {order.orderItems.reduce((acc,r)=>acc + r.quantity,0)}</p>
											<p>Статаус: {getStatusName(order.status)}</p>
											Дата заказа: {format(new Date(order.created), 'dd-MM-yyyy')}
										</div>
									</div>
								</div>
							</Link>
						</div>
					))
				}


			</div>
		</>
	)
}
