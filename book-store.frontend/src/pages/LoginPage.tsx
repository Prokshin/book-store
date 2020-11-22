import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {actions} from '../slices/userSlice';


export const LoginPage = () => {
	const dispatch = useDispatch();

	const [password, setPassword] = useState<string>('')
	const [email, setEmail] = useState<string>('')

	const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	}
	const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	}

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(actions.loginRequest({email, password}))
	}
	return (
		<section className="hero ">
			<div className="hero-body">
				<div className="container">
					<div className="columns is-centered">
						<div className="column is-half">
							<h1 className="title ">Вход в систему</h1>
							<form className="box" onSubmit={submitHandler}>
								<div className="field">
									<label className="label">Email</label>
									<div className="control">
										<input
											className="input"
											type="text"
											placeholder="Ваше имя"
											value={email}
											onChange={emailHandler}
										/>
									</div>
								</div>
								<div className="field">
									<label className="label">Пароль</label>
									<div className="control">
										<input
											className="input"
											type="password"
											placeholder="Придумайте пароль"
											value={password}
											onChange={passwordHandler}
										/>
									</div>
								</div>
								<div className="field mt-5">
									<button className="button is-success is-fullwidth">
										Войти
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
