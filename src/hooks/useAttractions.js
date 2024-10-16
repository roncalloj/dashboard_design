import { useMemo } from 'react';
import { consolidatedResult } from '../utilities/consolidatedResult.js';
import { counter } from '../utilities/counter.js';
import { handleAttractionsData } from '../utilities/handleAttractionsData.js';
import { sortByCount } from '../utilities/sortByCount.js';
import { useColombiaData } from './useColombiaData.js';
import { useDepartments } from './useDepartments.js';

export function useAttractions(selectedKey) {
	const endpoint = 'TouristicAttraction';

	const { colombiaData: arrayAttractions } = useColombiaData(endpoint, handleAttractionsData);
	const { arrayDepartments } = useDepartments();

	const allAttractionsData = useMemo(() => {
		if (arrayAttractions.length > 0 && arrayDepartments.length > 0) {
			return consolidatedResult(arrayAttractions, arrayDepartments, 'departmentID', 'departmentName');
		}
		return [];
	}, [arrayAttractions, arrayDepartments]);

	const groupedCounter = useMemo(
		() => counter(allAttractionsData, selectedKey),
		[allAttractionsData, selectedKey]
	);

	const attractionsResults = useMemo(() => sortByCount(groupedCounter), [groupedCounter]);

	return { attractionsResults };
}
