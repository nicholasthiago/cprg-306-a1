import SelectBox from 'components/select-box';
import React from 'react';


const TemperaturePage = () => {

	const options = [ 'Celsius to Fahrenheit', 'Fahrenheit to Celsius' ];

	return (
		<div className={'page-temperature'}>
			<SelectBox options={ options } label={ 'Temperature' } />
		</div>
	);
};

export default TemperaturePage;