import './Informations.css';

function Informations(props) {
	return (
		<div className='informations'>
			<div className='informations__imgs'>
				<img
					className='informations__imgs--img'
					src={props.grateTypeInfo.img1}
					alt={props.grateTypeInfo.alt.alt1}
				></img>
				<img
					className='informations__imgs--img'
					src={props.grateTypeInfo.img2}
					alt={props.grateTypeInfo.alt.alt2}
				></img>
				{props.grateTypeInfo.img3 ? (
					<img
						className='informations__imgs--img'
						src={props.grateTypeInfo.img3}
						alt={props.grateTypeInfo.alt.alt3}
					/>
				) : null}
			</div>
			<div className='informations__description'>
				<h3 className='informations__description__title'>
					​{props.grateTypeInfo.info.infoTitle}
				</h3>
				<p className='informations__description__text'>
					{props.grateTypeInfo.info.infoText}
				</p>
			</div>
		</div>
	);
}

export default Informations;
