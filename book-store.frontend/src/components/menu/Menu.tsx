import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getIsLogin, getUser} from '../../selectors/userSelector';
import {actions} from '../../slices/userSlice';


export const Menu: React.FC = () => {
	const dispatch = useDispatch();

	const isLogin = useSelector(getIsLogin);
	const user = useSelector(getUser)

	useEffect(() => {
		if (isLogin) dispatch(actions.fetchUserRequest(''))
	}, [dispatch, isLogin])
	// const isLogin = false;
	return (
		<nav className="navbar is-max-desktop" role="navigation" aria-label="main navigation">
			<div className="container is-widescreen">
				<div className="navbar-brand">
					<Link to="/" className="navbar-item">
						<h3 className="title is-4 has-text-primary">Books-store</h3>
					</Link>
				</div>

				<div className="navbar-menu">
					<div className="navbar-start">
						<Link to='/' className="navbar-item">
							Книги
						</Link>

						<Link to='/orders' className="navbar-item">
							Заказы
						</Link>

						<Link to='/about' className="navbar-item">
							о нас
						</Link>


					</div>

					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">
								<Link to='/basket' className="button">
								<span className="icon">
 									<i className="fas fa-shopping-basket"/>
								</span>
									<span>Корзина</span>
								</Link>
								{
									isLogin
										? <Link to='/profile' className="button white">
											<span className="icon">
												<i className="fas fa-user"/>
											</span>
											<span>
												{
													user
														? `${user.firstName} ${user.lastName}`
														: <span className="icon">
															<i className="fas fa-circle-notch fa-spin"></i>
														</span>

												}
											</span>
										</Link>
										: <>
											<Link to="/registration" className="button is-primary">
												<strong>Регистрация</strong>
											</Link>
											<Link to="/login" className="button is-light">
												Вход
											</Link>
										</>

								}

							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
