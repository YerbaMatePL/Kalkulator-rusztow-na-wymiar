import './CalculatorPrice.css';
import React, { useEffect, useState } from 'react';

function CalculatorPrice(props) {
	const [price, setPrice] = useState(0);
	const [isCounted, setIsCounted] = useState(false);

	useEffect(() => {
		if (isCounted) {
			priceHandler();
		}
	}, [isCounted, props.grate, props.quantity]); // eslint-disable-line

	const priceHandler = () => {
		const amount = props.priceHandler();

		if (!isNaN(amount)) {
			setPrice(amount);
			setIsCounted(true);
		}
	};

	return (
		<div className='calculator__price'>
			<button className={`calculator__calculateBtn ${props.themeColor}`} onClick={priceHandler}>
				Oblicz
			</button>
			<div className='calculator__price__box'>
				<h3 className='calculator__price__title'>Cena</h3>
				<p>{<span>{price}</span>} zł</p>
			</div>
		</div>
	);
}

export default CalculatorPrice;
