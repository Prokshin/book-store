import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../selectors/userSelector';
import {actions} from '../slices/userSlice';

export const UserPage = () => {
	const dispatch = useDispatch();

	const user = useSelector(getUser);

	const exit = () => {
		document.location.assign('/login');
		dispatch(actions.loginError(''))
	}
	return (
		<>
			<section className="hero is-medium is-dark is-bold">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">
							{`${user?.firstName} ${user?.lastName}`}
						</h1>
						<h2 className="subtitle">
							{user?.email}
						</h2>
						<h2 className="subtitle">
							{user?.address}
						</h2>
						<button className='button is-danger' onClick={exit}>Выйти из системы</button>
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
