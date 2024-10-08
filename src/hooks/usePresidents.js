import { useEffect, useState } from 'react';
import { getPresidentsData } from '../services/getPresidents.js';

export function usePresidents() {
	const [arrayParties, setArrayParties] = useState([]);
	const presidentsData = () => {
		getPresidentsData().then((presidentsParties) => setArrayParties(presidentsParties));
	};
	useEffect(presidentsData, []);

	const partyCounter = {};

	arrayParties?.map((parties) => {
		const { presidentID, politicalParty } = parties;
		// Si el partido ya está en el contador, incrementa su valor
		if (partyCounter[politicalParty]) {
			partyCounter[politicalParty].count++;
		} else {
			// Si no está en el contador, se agrega con valor 1 y se le asigna una id
			partyCounter[politicalParty] = {
				presidentID,
				politicalParty,
				count: 1,
			};
		}
	});
	//Convertir el objeto en arreglo
	const countedParties = Object.values(partyCounter);
	//Se ordenan los objetos por el número de apariciones en orden descendente
	countedParties.sort((a, b) => b.count - a.count);

	return { countedParties };
}
