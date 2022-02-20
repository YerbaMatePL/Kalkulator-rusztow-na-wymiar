import './CalculatorBtn.css';

function CalculatorBtn(props) {

	const priceHandler = () => {
		console.log('To jest nowa cena')
	}



	return (
		<div>
			<button onClick={priceHandler} className='calculateBtn'>Oblicz</button>
		</div>
	);
}

export default CalculatorBtn;
