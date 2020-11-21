import React from 'react';


export const LoginPage = () => {
	return (
		<section className="hero ">
			<div className="hero-body">
				<div className="container">
					<div className="columns is-centered">
						<div className="column is-half">
							<h1 className="title ">Вход в систему</h1>
							<form action="" className="box">
								<div className="field">
									<label className="label">Email</label>
									<div className="control">
										<input className="input" type="text" placeholder="Ваше имя"/>
									</div>
								</div>
								<div className="field">
									<label className="label">Пароль</label>
									<div className="control">
										<input className="input" type="password" placeholder="Придумайте пароль"/>
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
