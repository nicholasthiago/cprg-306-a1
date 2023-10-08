import SelectBox from 'components/select-box';
import React from 'react';


const WeightPage = () => {

	const options = [ 'kg to lb', 'lb to kg' ];

	return (
		<div className={'page-weight'}>
			<SelectBox options={ options } label={ 'Weight' } />
		</div>
	);
};

export default WeightPage;