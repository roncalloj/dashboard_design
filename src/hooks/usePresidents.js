import { useMemo } from 'react';
import { counter } from '../utilities/counter.js';
import { handlePresidentsData } from '../utilities/handlePresidentsData.js';
import { sortByCount } from '../utilities/sortByCount.js';
import { useColombiaData } from './useColombiaData.js';

export function usePresidents() {
	const endpoint = 'President';

	const { colombiaData: arrayParties } = useColombiaData(endpoint, handlePresidentsData);

	const partyCounter = useMemo(() => counter(arrayParties, 'politicalParty'), [arrayParties]);
	const countedParties = useMemo(() => sortByCount(partyCounter), [partyCounter]);

	return { countedParties };
}
