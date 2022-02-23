function CustomeSelect(props) {
	const values = props.values;

	return (
		<div>
			<label for={props.for}>{props.title}</label>
			<select value={props.value} onChange={props.onChange} id={props.id}>
				{Array.from(values).map((entry) => {
					return <option value={entry[0]}>{entry[1]}</option>;
				})}
			</select>
		</div>
	);
}

export default CustomeSelect;
