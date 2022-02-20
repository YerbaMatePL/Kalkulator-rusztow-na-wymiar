import './CalculatorPrice.css';
import CalculatorBtn from '../CalculatorBtn/CalculatorBtn';

function CalculatorPrice(props) {

	const currentPrice = props.price;

	return (
		<div className='calculator__price'>
			<CalculatorBtn />
			<div className='calculator__price__box'>
				<h3 className='calculator__price__title'>Cena</h3>
				<p className='calculator__price__text'>{isNaN(currentPrice)? <span></span> : <span>{currentPrice}</span>} zł</p>
			</div>
		</div>
	);
}

export default CalculatorPrice;
