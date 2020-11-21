import React from 'react';

export const RegistrationPage = () => {
	return (
		<>
			<section className="hero ">
				<div className="hero-body">
					<div className="container">
						<div className="columns is-centered">
							<div className="column is-half">
								<h1 className="title ">Регистрация</h1>
								<form action="" className="box">
									<div className="field">
										<label className="label">Имя</label>
										<div className="control">
											<input className="input" type="text" placeholder="Ваше имя"/>
										</div>
									</div>
									<div className="field">
										<label className="label">Фамилия</label>
										<div className="control">
											<input className="input" type="text" placeholder="Ваша фамилия"/>
										</div>
									</div>
									<div className="field">
										<label className="label">Email</label>
										<div className="control">
											<input className="input" type="text" placeholder="Ваш email"/>
										</div>
									</div>
									<div className="field">
										<label className="label">Пароль</label>
										<div className="control">
											<input className="input" type="password" placeholder="Придумайте пароль"/>
										</div>
									</div>
									<div className="field">
										<label className="label">Адрес доставки</label>
										<div className="control">
											<input className="input" type="password"
												   placeholder="Введите адрес, куда нужно будет доставлять ваши заказы"/>
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
