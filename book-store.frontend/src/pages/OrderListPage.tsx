import React from 'react';
import {Link} from 'react-router-dom';

export const OrderListPage = () => {
	return (
		<>
			<h2 className="title is-size-2">Заказы</h2>
			<div className="columns is-multiline">
				<div className="column is-6">

					<Link to='orders/1'>
						<div className="card">
							<header className="card-header">
								<p className="card-header-title">
									1234
								</p>
							</header>
							<div className="card-content">
								<div className="content">
									<p>Количество книг: 3</p>
									<p>Статаус: Ожидает оплаты</p>
									Дата заказа: <time dateTime="2016-1-1">19 ноября 2020</time>
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</>
	)
}
