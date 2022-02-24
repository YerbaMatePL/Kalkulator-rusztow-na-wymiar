import './Card.css';
import Calculator from '../Calculator/Calculator';
import Informations from '../Informations/Informations';
import React, { useState } from 'react';
import { grateTypes } from '../../data/grateData';

function Card() {

	const [themeColor, setThemeColor] = useState('firstColor');

	const changeThemeColor = () => { setThemeColor(themeColor === 'firstColor' ? 'secondColor' : 'firstColor') }


	const [grateType, setGrateType] = useState(grateTypes[0]);

	const updateStateValue = (dataFromCalculator) => {
		const grate = grateTypes.filter(function (grate) {
			return grate.expectedValue === dataFromCalculator;
		});

		setGrateType(grate[0]);
	};

	return (
		<div className={`card ${themeColor}`}>
			<div className={`card__title ${themeColor}`}>
				<h2>Kalkulator rusztów na wymiar</h2>
			</div>
			<button onClick={changeThemeColor} className='card__btnColor'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='30'
					height='30'
					fill= 'var(--contrast-color)'
					viewBox='0 0 16 16'
				>
					<path d='M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z' />
				</svg>
			</button>
			<div className='card__boxes'>
				<Calculator updateStateTypeGrate={updateStateValue} themeColor={themeColor} />
				<Informations grateTypeInfo={grateType} />
			</div>
		</div>
	);
}

export default Card;
