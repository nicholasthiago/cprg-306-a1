import React, { useState } from 'react';
import DistancePage from 'pages/distance/distance';
import TemperaturePage from 'pages/temperature/temperature';
import WeightPage from 'pages/weight/weight';


const MainPage = () => {
	// State : active tab
	const [ tab, setTab ] = useState('distance');

	const tabStyle			= 'flex-1 py-2 border-b-2 border-transparent transition-all cursor-pointer';
	const activeTabStyle	= tabStyle + ' border-slate-700';

	// Function : Changes active tab
	const change_Tab = ( tab ) => setTab( tab );

	// Function : Switches Tabs styles from Regular to Active
	const isActive = ( thisTab ) => ( thisTab === tab ) ? activeTabStyle : tabStyle ;

	// Renders : Active tab component
	const render_Tab = ( tab ) => {
		switch ( tab ) {
			case 'weight'		: return <WeightPage />;
			case 'temperature'	: return <TemperaturePage />;
			default				: return <DistancePage />
		};
	};

	return (
		<div className={'page-main px-4 py-8 mt-4 rounded-md w-2/3 shadow-md'}>

			<ul className={'tab-list flex flex-row gap-4 mb-4 border-b'}>
				<li className={ isActive('distance')	} onMouseDown={ () => change_Tab('distance')	}> {'Distance'}		</li>
				<li className={ isActive('weight')		} onMouseDown={ () => change_Tab('weight')		}> {'Weight'}		</li>
				<li className={ isActive('temperature') } onMouseDown={ () => change_Tab('temperature')	}> {'Temperature'}	</li>
			</ul>

			{ render_Tab( tab ) }

		</div>
	);
};

export default MainPage;