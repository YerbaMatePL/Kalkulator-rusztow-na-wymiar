import './CalculatorPrice.css';
import { useState } from 'react';

function CalculatorPrice(props) {
	const [price, setPrice] = useState(0);

	const priceHandler = () => {
		const amount = props.priceHandler();

		if (!isNaN(amount)) {
			setPrice(amount);
		}
	};

	return (
		<div className='calculator__price'>
			<button  className='calculator__calculateBtn' onClick={priceHandler}>Oblicz</button>
			<div className='calculator__price__box'>
				<h3 className='calculator__price__title'>Cena</h3>
				<p className='calculator__price__text'>{<span>{price}</span>} zł</p>
			</div>
		</div>
	);
}

export default CalculatorPrice;
