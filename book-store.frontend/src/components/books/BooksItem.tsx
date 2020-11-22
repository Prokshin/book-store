import React, {ChangeEvent} from 'react';
import {useDispatch} from 'react-redux';
import {actions} from '../../slices/basketSlice';

interface IBooksItemProps {
	id: number;
	title: string;
	description?: string;
	price: number;
	authorName?: string;
	categoryName?: string;
	addToBasket?: any
	checkBasket: any

}

export const BooksItem: React.FC<IBooksItemProps> = (props) => {
	const {id, title, description, price, authorName, categoryName, addToBasket, checkBasket} = props

	const dispatch = useDispatch();

	const count = checkBasket(id)

	const changeCountHandler = (n: number) => {
		dispatch(actions.addCount({id, count: count + n}))
	}

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
							<span className="is-size-3 title">
								{price}
								<span className="icon is-medium is-size-4">
									<i className="fas fa-ruble-sign"/>
								</span>
							</span>
						</span>
					</p>
					<p className="card-footer-item">
						<span>
							{
								count === 0
									? <button
										className="button is-text title is-size-4 has-text-primary"
										onClick={addToBasket}
									>
										В корзину
									</button>
									: <>
										<button className="button  title is-size-6 is-danger" onClick={() => changeCountHandler(-1)}>-</button>
										<span className="title mr-4 ml-4">{count}</span>
										<button className="button  title is-size-6 is-success" onClick={() => changeCountHandler(1)}>+</button>
									</>
							}

						</span>
					</p>
				</footer>
			</div>
		</div>
	)
}
