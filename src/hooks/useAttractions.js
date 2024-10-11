import { useEffect, useMemo, useState } from 'react';
import { fetchTouristicAttractions } from '../services/fetchAttractions.js';
import { countAttractionsByCity } from '../utilities/attractionsUtils.js';

export function useAttractions() {
	const [arrayAttractions, setArrayAttractions] = useState([]);

	const attractionsData = () => {
		fetchTouristicAttractions().then((attractionsResult) => setArrayAttractions(attractionsResult));
	};

	const cityCounter = useMemo(() => countAttractionsByCity(arrayAttractions), [arrayAttractions]);

	//Convertir el objeto en arreglo y se ordenan los objetos por el número de apariciones en orden descendente
	const arrayCityCounter = useMemo(() => {
		const cityArray = Object.values(cityCounter);
		return cityArray.sort((a, b) => b.count - a.count);
	}, [cityCounter]);

	useEffect(attractionsData, []);

	return { arrayCityCounter };
}
