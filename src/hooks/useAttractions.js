import { useEffect, useMemo, useState } from 'react';
import { fetchColombiaData } from '../services/fetchColombiaData.js';
import { counter } from '../utilities/counter.js';
import { handleAttractionsData } from '../utilities/handleAttractionsData.js';

export function useAttractions() {
	const [arrayAttractions, setArrayAttractions] = useState([]);
	const endpoint = 'TouristicAttraction';
	const attractionsData = () => {
		fetchColombiaData(endpoint)
			.then((attractionsRawData) => handleAttractionsData(attractionsRawData))
			.then((attractions) => setArrayAttractions(attractions));
	};

	const cityCounter = useMemo(() => counter(arrayAttractions, 'cityName'), [arrayAttractions]);

	//Convertir el objeto en arreglo y se ordenan los objetos por el número de apariciones en orden descendente
	const arrayCityCounter = useMemo(() => {
		const cityArray = Object.values(cityCounter);
		return cityArray.sort((a, b) => b.count - a.count);
	}, [cityCounter]);

	useEffect(attractionsData, []);

	return { arrayCityCounter };
}
