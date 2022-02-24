import React, { useState } from 'react';
import './Calculator.css';
import CalculatorPrice from './CalculatorPrice/CalculatorPrice';
import CustomInput from './CustomeInput/CustomInput';
import CustomSelect from './CustomSelect/CustomSelect';

function Calculator(props) {
	// Stan inputa szerokości

	const [inputWidthValue, setInputWidthValue] = useState('');

	const updateInputWidthHandler = (e) => {
		setInputWidthValue(e.target.value);
	};

	// Stan inputa głębokości

	const [inputDepthValue, setInputDepthValue] = useState('');

	const updateInputDepthHandler = (e) => {
		setInputDepthValue(e.target.value);
	};

	// Stan typu rusztu

	const [typeFireGrate, setTypeFireGrate] = useState('13.5');

	const checkTypeFireGrate = (e) => {
		setTypeFireGrate(e.target.value);
		props.updateStateTypeGrate(e.target.value);
	};

	// Stan ilości sztuk

	const [quantity, setQuantity] = useState('1');

	const checkQuantityFireGrate = (e) => {
		setQuantity(parseFloat(e.target.value));
	};

	// Stan dla walidacji inputa z szerokością

	const [widthValidation, setWidthValidation] = useState(false);
	const [depthValidation, setDepthValidation] = useState(false);

	// Funkcja do liczenia ceny i walidacja

	const priceHandler = () => {
		validation();

		const width = parseFloat(inputWidthValue);
		const depth = parseFloat(inputDepthValue);
		const type = parseFloat(typeFireGrate);
		const amount = parseFloat(quantity);

		const result = (width * depth * type * amount) / 100;

		return result.toFixed(2);
	};

	function validation() {
		inputWidthValue === ''
			? setWidthValidation(true)
			: setWidthValidation(false);
		inputDepthValue === ''
			? setDepthValidation(true)
			: setDepthValidation(false);
	}

	const ShowWidthError =
		widthValidation === true ? <p>⬆ Musisz podać szerokość rusztu</p> : <p></p>;
	const ShowDepthError =
		depthValidation === true ? <p>⬆ Musisz podać głębokość rusztu</p> : <p></p>;

	const map1 = new Map([
		['13.5', "Żeliwo szare gr. 11mm'"],
		['20.5', 'Żeliwo chromowe gr. 11mm'],
		['18.6', 'Stalowy z pudłużnych prętów'],
	]);

	const map2 = new Map([
		['1', '1'],
		['2', '2'],
		['3', '3'],
		['4', '4'],
		['5', '5'],
		['6', '6'],
		['7', '7'],
		['8', '8'],
		['9', '9'],
		['10', '10'],
	]);

	return (
		<div className='calculator'>
			<div className='calculator__items'>
				<CustomSelect
					labelFor='fireGrate'
					title='Typ rusztu'
					value={typeFireGrate}
					onChange={checkTypeFireGrate}
					values={map1}
					id='fireGrate'
				/>

				<CustomInput
					labelFor='grateWidth'
					title='Szerokość rusztu w cm'
					id='grateWidth'
					placeholder='Podaj szerokość rusztu w cm'
					error={ShowWidthError}
					value={inputWidthValue}
					update={updateInputWidthHandler}
				/>
				<CustomInput
					labelFor='grateDepth'
					title='Głębokość rusztu w cm'
					id='grateDepth'
					placeholder='Podaj głębokość rusztu w cm'
					error={ShowDepthError}
					value={inputDepthValue}
					update={updateInputDepthHandler}
				/>

				<CustomSelect
					labelFor='fireGrateAmount'
					title='Ilość sztuk'
					value={quantity}
					onChange={checkQuantityFireGrate}
					id='fireGrateAmount'
					values={map2}
				/>
			</div>
			<CalculatorPrice priceHandler={priceHandler} grate={typeFireGrate} themeColor={props.themeColor} />
		</div>
	);
}

export default Calculator;
