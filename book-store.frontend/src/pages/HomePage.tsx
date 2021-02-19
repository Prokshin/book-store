import React, {useEffect, useState} from 'react';
import {BooksList} from '../components/books/BooksList';
import {useDispatch} from 'react-redux';
import {actions} from '../slices/userSlice';
import Select from 'react-select';

const F = [
	'Найдётся не всё',
	'just don\'t do it',
]

export const HomePage = React.memo(() => {
	const dispatch = useDispatch();
	useEffect(()=>{
		dispatch(actions.checkLocalStorage(''))

	},[])


	return (
		<>
			<section className="hero is-dark is-medium mb-6">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">
							BookStore
						</h1>
						<h2 className="subtitle">

							{
								F[Math.floor(Math.random() * Math.floor(2))]
							}
						</h2>
					</div>
				</div>
			</section>
			<section>
				<BooksList/>
			</section>
		</>
	)
})
