/**
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