import { useEffect, useMemo, useState } from 'react';
import { fetchColombiaData } from '../services/fetchColombiaData.js';
import { counter } from '../utilities/counter.js';
import { handlePresidentsData } from '../utilities/handlePresidentsData.js';

export function usePresidents() {
	const [arrayParties, setArrayParties] = useState([]);
	const endpoint = 'President';
	const presidentsData = () => {
		fetchColombiaData(endpoint)
			.then((presidentsRawData) => handlePresidentsData(presidentsRawData))
			.then((presidentsParties) => setArrayParties(presidentsParties));
	};

	const partyCounter = useMemo(() => counter(arrayParties, 'politicalParty'), [arrayParties]);

	useEffect(presidentsData, []);

	//Convertir el objeto en arreglo
	const countedParties = Object.values(partyCounter);
	//Se ordenan los objetos por el número de apariciones en orden descendente
	countedParties.sort((a, b) => b.count - a.count);

	return { countedParties };
}
