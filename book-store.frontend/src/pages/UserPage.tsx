import React from 'react';

export const UserPage = () => {
	return (
		<>
			<section className="hero is-medium is-dark is-bold">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">
							Иванов Иван
						</h1>
						<h2 className="subtitle">
							ivanov@mail.ru
						</h2>
					</div>
				</div>
			</section>
			<section className="mt-6">
				<div className="columns">
					<div className="column">
						<div className="box ">
							Всего заказов: <h1 className="title has-text-primary">12</h1>
						</div>

					</div>
					<div className="column">
						<div className="box ">
							Завершённых заказов: <h1 className="title has-text-primary">10</h1>
						</div>

					</div>
					<div className="column">
						<div className="box ">
							Куплено книг: <h1 className="title has-text-primary">29</h1>
						</div>

					</div>
				</div>
			</section>
		</>
	)
}
