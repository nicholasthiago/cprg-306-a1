import React, { useState } from 'react';
import { unitConverter } from 'utils/util';


const SelectBox = ({ options = [], label = 'distance' }) => {

	const [ option, setOption ] = useState( '' );
	const [ target, setTarget ] = useState( [] );
	const [ value , setValue  ] = useState( 0.00 );

	// Update : unit values
	const onChange = ( value ) => {
		console.log( value )

		setOption( value );
		setTarget( value.split(' to ') );

		console.log( value.split(' to ') );
	};

	// Update : converted value
	const update_Value = ( input ) => {

		if ( target.length > 1 ) {
			const converter = unitConverter( target[0], target[1]);
			setValue( converter( input ).toFixed(2) );

		} else {
			alert( 'select an option first' );
		};
	};


	if ( Array.isArray( options ) && options.length > 0 ) {

		return (
			<div className={'comp-select-box flex flex-col w-full items-start gap-2'}>

				<label htmlFor="option-list"> {`Select a ${ label } option:`} </label>

				{/* Section : Option Selector */}
				<select className={'shadow-md py-2 px-3 rounded-sm'}
					name="list" id="option-list"
					onChange={ e => onChange( e.target.value ) }
					value={ option }
				>
					<option value="">{'-- please choose an option --'} </option>

					{( options ).map( ( option, i ) => {
						return (
							<option key={ i } value={ option }> { option } </option>
						);
					})}

				</select>

				{/* Section : Converter */}
				<div className='comp-converter flex flex-col items-start gap-4 pt-4'>

					<label> {'Value'} </label>
					<input className={'shadow-lg p-2 rounded-sm'} type={'number'} onInput={ e => update_Value( e.target.value )} defaultValue={ 0 } />
					
					<label> {'Converted Value'} </label>
					<input className={'shadow-lg p-2 rounded-sm'} type={'number'} value={ value } readOnly />

				</div>

			</div>
		);

	} else {
		return ( <div> {'loading...'} </div>)
	};
};

export default SelectBox;