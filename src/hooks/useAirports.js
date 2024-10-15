import { useMemo } from 'react';
import { consolidatedResult } from '../utilities/consolidatedResult.js';
import { counter } from '../utilities/counter.js';
import { handleAirportsData } from '../utilities/handleAirportsData.js';
import { sortByCount } from '../utilities/sortByCount.js';
import { useColombiaData } from './useColombiaData.js';
import { useRegions } from './useRegions.js';

export function useAirports() {
	const endpoint = 'Airport';

	const { colombiaData: airportsData } = useColombiaData(endpoint, handleAirportsData);

	const cityCounter = useMemo(() => counter(airportsData, 'cityName'), [airportsData]);
	const arrayCityCounter = useMemo(() => sortByCount(cityCounter), [cityCounter]);

	const { arrayRegions } = useRegions();

	const airportsResults = consolidatedResult(arrayCityCounter, arrayRegions, 'regionID', 'regionName');

	return { airportsResults };
}
