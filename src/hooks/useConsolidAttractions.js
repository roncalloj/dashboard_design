import { useEffect, useState } from 'react';
import { getDepartment } from '../services/getDepartmentByID.js';

export function useConsolidAttractions({ arrayCityCounter }) {
	const [departments, setDepartments] = useState();

	useEffect(() => {
		const departmentsData = async (arrayCityCounter) => {
			const allDepartmentsIDs = [];
			arrayCityCounter?.map((attraction) => {
				allDepartmentsIDs.push(attraction.departmentID);
			});
			const singleDepartmentsIDs = [...new Set(allDepartmentsIDs)];

			const departmentsPromises = singleDepartmentsIDs.map((id) => getDepartment(id));
			const departmensResults = await Promise.all(departmentsPromises);
			return setDepartments(departmensResults);
		};
	}, [arrayCityCounter]);

	//Convertir el objeto en arreglo
	const arrayCityCounter = Object.values(cityCounter);

	// Se incluye la info del nombre de departamento
	// const countedAttractions = arrayCityCounter?.map((city) => ({
	// 	...city,
	// 	departmentName:
	// 		departments?.find((eachDepartment) => {
	// 			eachDepartment.departmentID === city.departmentID;
	// 		})?.departmentName || 'Cargando...',
	// }));

	//Se ordenan los objetos por el número de apariciones en orden descendente
	arrayCityCounter.sort((a, b) => b.count - a.count);

	// setAttractionResult(arrayCityCounter);

	console.log(arrayCityCounter);
	// useEffect(() => {
	// }, [arrayAttractions, departments]);

	// if (attractionsResult?.length > 0)
	return { arrayCityCounter };
}
