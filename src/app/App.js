/**
 * @author Nicholas Thiago Cabral Xavier da Costa [ 000866034 ]
 * @date 10-08-2023
 * 
 * Assignment 01 : App Description
 * - 3 Tabs with Temperature, Weight and Distance converters
 * - Alerts if no conversion were selected
 * 
 * @return onInput : returns updated converted value
 * 
 * @input User Guidelines:
 * - Selects unit type [ distance, weight, temperature ]
 * - Selects conversion way [ km to lb, km to miles... ]
 * - Inputs the value to be converted
 * 
 * App Stack :
 * - React.JS
 * - TailwindCSS
 * - Github Pages ( deployment )
 * 
 */

import MainPage from 'pages/main/main';
import './App.css';


function App() {

	return (
		<div className={'App flex flex-col items-center justify-center w-screen'}>

			<h1 className={'text-4xl text-slate-900 font-bold pt-3'}> {'Conversion Web Application'} </h1>
			
			<MainPage />
		</div>
	);
}

export default App;