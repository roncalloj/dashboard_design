import { handleRegionsData } from '../utilities/handleRegionsData';
import { useColombiaData } from './useColombiaData';

export function useRegions() {
	const endpoint = 'Region';

	const { colombiaData: arrayRegions } = useColombiaData(endpoint, handleRegionsData);

	return { arrayRegions };
}
