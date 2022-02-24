function CustomInput(props) {
	return (
		<div>
			<label htmlFor={props.labelFor}>{props.title}</label>
			<input
				onChange={props.update}
				id={props.id}
				type='number'
				placeholder={props.placeholder}
				step='0.5'
				value={props.value}
			></input>
			<div className='errorInfo'>{props.error}</div>
		</div>
	);
}

export default CustomInput;
