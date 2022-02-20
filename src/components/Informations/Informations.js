import './Informations.css';
import productImg from '../../assets/ruszty/zeliwo_szare/ruszt_zeliwny.png'

function Informations () {
    return(
        <div className='informations'>
            <div className='informations__imgs'>
                <img className='informations__imgs--img' src={productImg} alt="ruszt do kominka"></img>
                <img className='informations__imgs--img' src={productImg} alt="ruszt do kominka"></img>
                <img className='informations__imgs--img' src={productImg} alt="ruszt do kominka"></img>
            </div>
            <div className='informations__description'>
                <h3 className='informations__description__title'>​Ruszt z żeliwa szarego</h3>
                <p className='informations__description__text'>Ruszt z żeliwa szarego o grubości 11mm - to tradycyjny ruszt kominkowy z okrągłymi otworami o żywotności około 5 lat przy paleniu drewnem. Żeliwo typu EN-GJL 250 niskowęglowe. Otwory okrągłe rozszerzające się na dole w celu łatwiejszego zsypywania popiołu.</p>
                
            </div>
        </div>
    )
}

export default Informations;