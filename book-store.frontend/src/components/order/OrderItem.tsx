import React from 'react';
import {Order, OrderDetail, OrderDetailItem} from '../../types/CommonTypes';

interface IOrderItemProps {
	orderItem: OrderDetailItem;
}

export const OrderItem: React.FC<IOrderItemProps> = ({orderItem}) => {
	return (
		<tr>
			<td>
				<h3 className="is-size-5">{orderItem.book.title}</h3>
				<p className="has-text-grey-light">{orderItem.book.author?.firstName} {orderItem.book.author?.lastName}</p>
				<p className="has-text-grey-light">{orderItem.book.category?.name}</p>
			</td>
			<td className="has-text-right">{orderItem.quantity}</td>
			<td className="has-text-right">{orderItem.book.price}</td>
		</tr>
	)
}
