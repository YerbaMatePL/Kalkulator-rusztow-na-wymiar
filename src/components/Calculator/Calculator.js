import React, { useState } from 'react';
import './Calculator.css';
import CalculatorPrice from './CalculatorPrice/CalculatorPrice';

function Calculator() {
	// Stan inputa szerokości

	const [inputWidthValue, setInputWidthValue] = useState('');

	const updateInputWidthHandler = (e) => {
		setInputWidthValue(e.target.value);
	};

	// Stan inputa głębokości

	const [inputDepthValue, setInputDepthValue] = useState('');

	const updateDepthValue = (e) => {
		setInputDepthValue(e.target.value);
	};

	// Stan typu rusztu

	const [typeFireGrate, setTypeFireGrate] = useState('13.5');

	const checkTypeFireGrate = (e) => {
		setTypeFireGrate(e.target.value);
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
		inputWidthValue === '' ? setWidthValidation(true) : setWidthValidation(false)
		inputDepthValue === '' ? setDepthValidation(true) : setDepthValidation(false)
	};

	const ShowWidthError = (widthValidation === true ? <p> ⬆ Musisz podać szerokość rusztu</p> : false);
	const ShowDepthError = (depthValidation === true ? <p> ⬆ Musisz podać głębokość rusztu</p> : false);

	return (
		<div className='calculator'>
			<div className='calculator__items'>
				<div className='calculator__items--fireGrate'>
					<label for='fireGrate'>Typ rusztu</label>
					<select
						value={typeFireGrate}
						onChange={checkTypeFireGrate}
						id='fireGrate'
					>
						<option value='13.5'>Żeliwo szare gr. 11mm</option>
						<option value='20.5'>Żeliwo chromowe gr. 11mm</option>
						<option value='18.6'>Stalowy z pudłużnych prętów</option>
						{/* <option value='34'>Ruszt stojący bez popelnika</option>
						<option value='5'>Ruszt stojący z popelnikiem</option> */}
					</select>
				</div>
				<div className='calculator__items--grateWidth'>
					<label for='grateWidth'>Szerokość rusztu w cm</label>
					<input
						onChange={updateInputWidthHandler}
						id='grateWidth'
						type='number'
						placeholder='Podaj szerokość rusztu w cm'
						step='0.5'
						value={inputWidthValue}
					></input>
					<div className='errorInfo'>{ShowWidthError}</div>
				</div>

				<div className='calculator__items--grateDepth'>
					<label for='grateDepth'>Głębokość rusztu w cm</label>
					<input
						onChange={updateDepthValue}
						id='grateDepth'
						type='number'
						placeholder='Podaj głębokość rusztu w cm'
						step='0.5'
						value={inputDepthValue}
					></input>
					<div className='errorInfo'>{ShowDepthError}</div>
				</div>

				<div className='calculator__items--fireGrateAmount'>
					<label for='fireGrateAmount'>Ilość sztuk</label>
					<select
						value={quantity}
						id='fireGrateAmount'
						onChange={checkQuantityFireGrate}
					>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
					</select>
				</div>
			</div>
			<CalculatorPrice priceHandler={priceHandler} />
		</div>
	);
}

export default Calculator;
