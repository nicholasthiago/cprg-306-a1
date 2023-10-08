

// Higher-order function for unit conversion
export const unitConverter = ( fromUnit, toUnit, value ) => {

	// Define the conversion function based on the units
	let conversionFunction;

	// Conversion functions
	const lbToKg = ( value ) => value * 0.453592;
	const kgToLb = ( value ) => value / 0.453592;

	const milesToKm = ( value ) => value * 1.60934;
	const kmToMiles = ( value ) => value / 1.60934;

	const celsiusToFahrenheit = ( value ) => (value * 9 / 5) + 32;
	const fahrenheitToCelsius = ( value ) => (value - 32) * 5 / 9;


	// Switch case for each possible conversion
	switch (true) {
		case (fromUnit === "lb"		&& toUnit === "kg"		):
			conversionFunction = lbToKg;
			break;

		case (fromUnit === "kg"		&& toUnit === "lb"		):
			conversionFunction = kgToLb;
			break;

		case (fromUnit === "miles"	&& toUnit === "km"		):
			conversionFunction = milesToKm;
			break;

		case (fromUnit === "km" 	&& toUnit === "miles"	):
			conversionFunction = kmToMiles;
			break;

		case (fromUnit === "Celsius" 	&& toUnit === "Fahrenheit"		):
			conversionFunction = celsiusToFahrenheit;
			break;

		case (fromUnit === "Fahrenheit" 	&& toUnit === "Celsius"		):
			conversionFunction = fahrenheitToCelsius;
			break;

		default:
			console.error("Invalid conversion units");
			return null;
	}

	// Return the conversion function
	return ( value ) => {
		if ( Array.isArray( value )) {

			// Array : convert every value
			return value.map(conversionFunction);

		} else {

			// Single Value : convert the value
			return conversionFunction( value );
		}
	};
}