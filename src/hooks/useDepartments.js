import { handleDepartmentsData } from '../utilities/handleDepartmentsData.js';
import { useColombiaData } from './useColombiaData.js';

export function useDepartments() {
	const endpoint = 'Department';

	const { colombiaData: arrayDepartments } = useColombiaData(endpoint, handleDepartmentsData);

	return { arrayDepartments };
}
