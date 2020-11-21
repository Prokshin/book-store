import React from 'react';


export const OrderPage = () => {
	return (
		<div className="columns">

			<div className="column ">
				<div className="card">
					<header className="card-header">
						<p className="card-header-title is-size-4">Заказ номер: 1234</p>
					</header>
					<div className="card-content">
						<table className="table is-fullwidth">
							<thead>
							<tr>
								<td>Название книги</td>
								<td className="has-text-right">Количество</td>
								<td className="has-text-right">стоимость</td>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td>
									<h3 className="is-size-5">Чапаев и пустота</h3>
									<p className="has-text-grey-light">Виктор Пелевин</p>
									<p className="has-text-grey-light">Современная проза</p>
								</td>
								<td className="has-text-right">2</td>
								<td className="has-text-right">400</td>
							</tr>
							<tr>
								<td>
									<h3 className="is-size-5">Хроники заводной птицы</h3>
									<p className="has-text-grey-light">Харуки Мураками</p>
									<p className="has-text-grey-light">Современная проза</p>
								</td>
								<td className="has-text-right">1</td>
								<td className="has-text-right">500</td>
							</tr>
							</tbody>
							<tfoot>
							<tr className="is-size-5">
								<td>Итог</td>
								<td/>
								<td className="has-text-right">1300</td>
							</tr>
							</tfoot>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}
