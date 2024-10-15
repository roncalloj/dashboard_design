import { useMemo } from 'react';
import { consolidatedResult } from '../utilities/consolidatedResult.js';
import { counter } from '../utilities/counter.js';
import { handleAttractionsData } from '../utilities/handleAttractionsData.js';
import { sortByCount } from '../utilities/sortByCount.js';
import { useColombiaData } from './useColombiaData.js';
import { useDepartments } from './useDepartments.js';

export function useAttractions() {
	const endpoint = 'TouristicAttraction';

	const { colombiaData: arrayAttractions } = useColombiaData(endpoint, handleAttractionsData);

	const cityCounter = useMemo(() => counter(arrayAttractions, 'cityName'), [arrayAttractions]);
	const arrayCityCounter = useMemo(() => sortByCount(cityCounter), [cityCounter]);

	const { arrayDepartments } = useDepartments();

	const attractionsResults = consolidatedResult(
		arrayCityCounter,
		arrayDepartments,
		'departmentID',
		'departmentName'
	);

	return { attractionsResults };
}
