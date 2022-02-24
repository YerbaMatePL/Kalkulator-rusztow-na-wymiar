function CustomSelect(props) {
	const values = props.values;

	return (
		<div>
			<label htmlFor={props.labelFor}>{props.title}</label>
			<select value={props.value} onChange={props.onChange} id={props.id}>
				{Array.from(values).map((option) => {
					return <option value={option[0]}>{option[1]}</option>;
				})}
			</select>
		</div>
	);
}

export default CustomSelect;
