import React from 'react';

export const HomePage = () => {
	return (
		<>
			<section>
				<div className="columns is-multiline ">
					<div className="column is-6">
						<div className="card">
							<div className="card-content">
								<span className="tag is-info">Современная проза</span>
								<h1 className="title mt-3">
									Чапаев и пустота
								</h1>

								<p className="subtitle">
									Виктор Пелевин
								</p>

								<p className="is-text">
									Книга заставляет по-новому взглянуть не только на известного героя, красного командира Чапаева, но и на весь окружающий мир. В ней переплелись современная реальность, исторические события и другой, параллельный мир.
									Где правда, а где вымысел, уже сложно понять. Чапаев утверждает, что ни нас, ни окружающих вообще не существует. Все – Пустота. Но такие настроения не мешают отважному бойцу прекрасно адаптироваться в этой самой Пустоте, пить самогон, строить солдат.
								</p>


							</div>
							<footer className="card-footer">
								<p className="card-footer-item">
								  <span>
									<h1 className="is-size-4 title has-text-info">490</h1>
								  </span>
								</p>
								<p className="card-footer-item">
								  <span>
									  <button className="button is-text title is-size-4 has-text-primary">В корзину</button>
								  </span>
								</p>
							</footer>
						</div>
					</div>
				</div>

			</section>
		</>
	)
}
