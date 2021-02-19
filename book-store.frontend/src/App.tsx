import React, {useEffect} from 'react';
// import './App.css';
import 'toasted-notes/src/styles.css';
import 'bulma/css/bulma.min.css'
import {Menu} from './components/menu/Menu';

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import {HomePage} from './pages/HomePage';
import {AboutPage} from './pages/AboutPage';
import {BasketPage} from './pages/BasketPage';
import {OrderPage} from './pages/OrderPage';
import {LoginPage} from './pages/LoginPage';
import {RegistrationPage} from './pages/RegistarationPage';
import {OrderListPage} from './pages/OrderListPage';
import {UserPage} from './pages/UserPage';
import {useDispatch} from 'react-redux';
import {actions} from './slices/userSlice';
import {Toaster} from 'react-hot-toast';


function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(actions.checkLocalStorage(''))
	}, [dispatch])
	return (
		<Router>
			<div>
				<Menu/>
				<Toaster />
				<section className="section">
					<div className="container">
						<Switch>
							<Route path="/orders" exact>
								<OrderListPage/>
							</Route>
							<Route path="/orders/:id">
								<OrderPage/>
							</Route>
							<Route path="/basket">
								<BasketPage/>
							</Route>
							<Route path="/about">
								<AboutPage/>
							</Route>
							<Route path="/login" exact>
								<LoginPage/>
							</Route>
							<Route path="/registration" exact>
								<RegistrationPage/>
							</Route>
							<Route path="/profile" exact>
								<UserPage/>
							</Route>

							<Route path="/" exact>
								<HomePage/>
							</Route>
						</Switch>
					</div>
				</section>
			</div>

		</Router>
	);
}

export default App;
