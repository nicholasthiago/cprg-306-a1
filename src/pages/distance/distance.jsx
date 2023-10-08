import React from 'react';

import SelectBox from 'components/select-box';

const DistancePage = () => {

	const options = [ 'km to miles', 'miles to km' ];

	return (
		<div className={'page-distance'}>
			<SelectBox options={ options } label={ 'Distance' } />
		</div>
	);
};

export default DistancePage;