import img1a from '../assets/ruszty/zeliwo_szare/ruszt_zeliwny.png';
import img2a from '../assets/ruszty/zeliwo_szare/ruszt_zeliwny_okragly.png';
import img3a from '../assets/ruszty/zeliwo_szare/ruszt_zeliwny_wymiary.png';
import img1b from '../assets/ruszty/zeliwo_chromowe/ruszt_chromowany.png';
import img2b from '../assets/ruszty/zeliwo_chromowe/ruszt_zeliwny_chromowy.png';
import img1c from '../assets/ruszty/podluzne_prety/ruszt_z_podluznych_pretow.png';
import img2c from '../assets/ruszty/podluzne_prety/ruszt_kominkowy_na_wymiar.png';

export const grateTypes = [
	{
		id: '1a',
		expectedValue: '13.5',
		img1: img1a,
		img2: img2a,
		img3: img3a,
		alt: {
			alt1: 'ruszt żeliwny do kominka',
			alt2: 'ruszt żeliwny okrągły',
			alt3: 'ruszt żeliwny na wymiar',
		},
		info: {
			infoTitle: 'Ruszt z żeliwa szarego',
			infoText:
				'Ruszt z żeliwa szarego o grubości 11mm - to tradycyjny ruszt kominkowy z okrągłymi otworami o żywotności około 5 lat przy paleniu drewnem. Żeliwo typu EN-GJL 250 niskowęglowe. Otwory okrągłe rozszerzające się na dole w celu łatwiejszego zsypywania popiołu.',
		},
	},

	{
		id: '1b',
		expectedValue: '20.5',
		img1: img1b,
		img2: img2b,
		alt: {
			alt1: 'ruszt chromowy',
			alt2: 'ruszt chromowy do kominka',
		},
		info: {
			infoTitle: '​Ruszt z żeliwa chromowego',
			infoText:
				'​Ruszt z żeliwa chromowego o grubości 11mm - to ruszt stosowany w kotłach oraz kominkach opalanych węglem. Dlatego też przy użyciu tego materiału w tradycyjnym kominku opalanym drewnem żywotność może wynieść nawet 15 lat. Przy paleniu węglem żywotność wynosi około 6 lat. Jest to żeliwo typu ZlCr 2. 2%. Dodatek chromu sprawia że ruszt musi być wytopiony w wyższej temperaturze niż ruszt z żeliwa szarego, dzięki temu zmieniają się wiązania, co sprawia że ruszt jest dużo trwalszy od rusztów tradycyjnych.',
		},
	},
	{
		id: '1c',
		expectedValue: '18.6',
		img1: img1c,
		img2: img2c,
		alt: {
			alt1: 'ruszt stalowy do kominka',
			alt2: 'ruszt stalowy na wymiar ',
		},
		info: {
			infoTitle: '​Ruszt ze stali kotłowej z podłużnych prętów',
			infoText:
				'​Ruszt ze stali kotłowej z podłużnych prętów- wytrzymałością jest zbliżony do rusztu z żeliwa szarego. Jednak przez jego podłużne pręty popiół łatwiej się zsypuje. Niestety przy tym typie rusztu materiał nie nagrzewa się równomiernie - co może prowadzić do nieregularnego zużywania się rusztu. Dodatkowo taki ruszt jest wskazany w kominkach, w których ciąg jest słabszy, ponieważ ma on największą powierzchnię przepuszczania powietrza ze wszystkich dostępnych typów rusztów.',
		},
	},
];
