import React from 'react';

export const BasketPage = () => {
	return (
		<>
			<h1 className="title is-size-2">Корзина</h1>
			<table className="table is-fullwidth">
				<thead>
				<tr>
					<th>Книга</th>
					<th className="has-text-right">Количество</th>
					<th className="has-text-right">Стоимость</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>
						<h3 className="is-size-5">Чапаев и пустота</h3>
						<p className="has-text-grey-light">Виктор Пелевин</p>
						<p className="has-text-grey-light">Современная проза</p>
					</td>
					<td className="has-text-right ">
						<div className="columns">
							<div className="column is-offset-8 is-4">
								<input className="input" type="number" defaultValue="1"/>
							</div>
						</div>
					</td>
					<td className="has-text-right">400</td>
				</tr>
				</tbody>
				<tfoot>
				<tr className="is-size-5">
					<td>Итог</td>
					<td className="has-text-right">15</td>
					<td className="has-text-right">1300</td>
				</tr>
				</tfoot>
			</table>
			<div className="columns">
				<div className="column is-4 is-offset-8 has-text-right">
					<button className=" button is-success">
						Оформить заказ
					</button>
				</div>
			</div>
		</>
	)
}
