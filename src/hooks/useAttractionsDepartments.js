import { useEffect, useState } from 'react';
import { fetchDepartment } from '../services/fetchDepartmentByID.js';
import { departmentsData } from '../utilities/attractionsUtils.js';

export function useAttractionsDepartments({ arrayCityCounter }) {
	const [attractionsDepartments, setAttractionsDepartments] = useState([]);

	useEffect(() => {
		if (arrayCityCounter?.length > 0) {
			departmentsData(arrayCityCounter, fetchDepartment, setAttractionsDepartments);
		}
	}, [arrayCityCounter]);

	return { attractionsDepartments };
}
