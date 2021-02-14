import React, {FormEvent, useState} from 'react';
import {registration} from '../dataProvider/booksDataContext';

export const RegistrationPage = () => {

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [address, setAddress] = useState('')


	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		registration({firstName, lastName, email, address, password});

	}

	return (
		<>
			<section className="hero ">
				<div className="hero-body">
					<div className="container">
						<div className="columns is-centered">
							<div className="column is-half">
								<h1 className="title ">Регистрация</h1>
								<form action="" className="box" onSubmit={onSubmit}>
									<div className="field">
										<label className="label">Имя</label>
										<div className="control">
											<input className="input" type="text" placeholder="Ваше имя"
												   onChange={(e) => setFirstName(e.target.value)}
												   value={firstName}/>
										</div>
									</div>
									<div className="field">
										<label className="label">Фамилия</label>
										<div className="control">
											<input className="input" type="text" placeholder="Ваша фамилия"
												   onChange={(e) => setLastName(e.target.value)}
												   value={lastName}/>
										</div>
									</div>
									<div className="field">
										<label className="label">Email</label>
										<div className="control">
											<input className="input" type="text" placeholder="Ваш email" value={email}
												   onChange={(e) => setEmail(e.target.value)}/>
										</div>
									</div>
									<div className="field">
										<label className="label">Пароль</label>
										<div className="control">
											<input className="input" type="password" placeholder="Придумайте пароль"
												   onChange={(e) => setPassword(e.target.value)}
												   value={password}/>
										</div>
									</div>
									<div className="field">
										<label className="label">Адрес доставки</label>
										<div className="control">
											<input className="input" type="text"
												   placeholder="Введите адрес, куда нужно будет доставлять ваши заказы"
												   onChange={(e) => setAddress(e.target.value)}
												   value={address}/>
										</div>
									</div>
									<div className="field mt-5">
										<button className="button is-success is-fullwidth">
											Зарегестрироваться
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
