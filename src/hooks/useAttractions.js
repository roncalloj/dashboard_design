import { useEffect, useState } from 'react';
import { getTouristicAttractions } from '../services/getAttractions.js';
// import { getDepartment } from '../services/getDepartmentByID.js';

export function useAttractions() {
	const [arrayAttractions, setArrayAttractions] = useState();
	// const [departments, setDepartments] = useState();
	// const [attractionsResult, setAttractionResult] = useState([]);

	const attractionsData = () => {
		getTouristicAttractions().then((attractionsResult) => setArrayAttractions(attractionsResult));
	};

	// const departmentsData = async (allAttractionsData) => {
	// 	const allDepartmentsIDs = [];
	// 	allAttractionsData?.map((attraction) => {
	// 		allDepartmentsIDs.push(attraction.departmentID);
	// 	});
	// 	const singleDepartmentsIDs = [...new Set(allDepartmentsIDs)];

	// 	const departmentsPromises = singleDepartmentsIDs.map((id) => getDepartment(id));
	// 	const departmensResults = await Promise.all(departmentsPromises);
	// 	return setDepartments(departmensResults);
	// };

	useEffect(attractionsData, []);

	// useEffect(() => {
	// 	if (!arrayAttractions) return;
	// 	departmentsData(arrayAttractions);
	// }, [arrayAttractions]);

	// if (!arrayAttractions) return;
	// if (!departments) return;

	const cityCounter = {};

	arrayAttractions?.forEach((attraction) => {
		const { attractionID, cityID, cityName, departmentID } = attraction;

		if (cityCounter[cityName]) {
			cityCounter[cityName].count++;
		} else {
			cityCounter[cityName] = {
				attractionID,
				cityID,
				cityName,
				departmentID,
				count: 1,
			};
		}
	});

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
