import React from 'react';

interface IBooksItemProps {
	id: number;
	title: string;
	description?: string;
	price: number;
	authorName?: string;
	categoryName?: string;
}

export const BooksItem: React.FC<IBooksItemProps> = (props) => {
	const {id, title, description, price, authorName, categoryName} = props;
	return (
		<div className="column is-6">
			<div className="card">
				<div className="card-content">
					<span className="tag is-info">{categoryName}</span>
					<h1 className="title mt-3">
						{title}
					</h1>

					<p className="subtitle">
						{authorName}
					</p>

					<p className="is-text">
						{description}
					</p>


				</div>
				<footer className="card-footer">
					<p className="card-footer-item">
								  <span>
									<h1 className="is-size-3 title">
										{price}
										<span className="icon is-medium is-size-4">
											<i className="fas fa-ruble-sign"/>
										</span>
									</h1>
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
	)
}
