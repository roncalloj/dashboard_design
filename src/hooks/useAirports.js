import { useMemo } from 'react';
import { consolidatedResult } from '../utilities/consolidatedResult.js';
import { counter } from '../utilities/counter.js';
import { handleAirportsData } from '../utilities/handleAirportsData.js';
import { sortByCount } from '../utilities/sortByCount.js';
import { useColombiaData } from './useColombiaData.js';
import { useRegions } from './useRegions.js';

export function useAirports(selectedKey) {
	const endpoint = 'Airport';

	const { colombiaData: airportsData } = useColombiaData(endpoint, handleAirportsData);
	const { arrayRegions } = useRegions();

	const allAirportsData = useMemo(() => {
		if (airportsData.length > 0 && arrayRegions.length > 0) {
			return consolidatedResult(airportsData, arrayRegions, 'regionID', 'regionName');
		}
		return [];
	}, [airportsData, arrayRegions]);

	const groupedCounter = useMemo(() => counter(allAirportsData, selectedKey), [allAirportsData, selectedKey]);
	const airportsResults = useMemo(() => sortByCount(groupedCounter), [groupedCounter]);

	return { airportsResults };
}
