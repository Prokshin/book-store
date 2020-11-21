import React from 'react';

interface ILoadingProps {
	loading: boolean
}

export const Loading: React.FC<ILoadingProps> = (props) => {
	const {loading} = props;
	if (!loading) return null
	return (
		<div className="columns">
			<div className="column has-text-centered">
				<span className="icon is-large is-size-1 ">
					<i className="fas fa-circle-notch fa-spin"></i>
				</span>
			</div>
		</div>
	)
}
