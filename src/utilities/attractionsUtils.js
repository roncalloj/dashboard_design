export function consolidatedAttractions(attractionsDataArray, attractionsDepartmentsArray) {
	if (!attractionsDataArray) return [];
	if (!attractionsDepartmentsArray) return [];
	// Crear un mapa de departamentos para facilitar la búsqueda
	const departmentMap = Object.fromEntries(
		attractionsDepartmentsArray?.map((department) => [department.departmentID, department.departmentName])
	);

	// Crear un nuevo arreglo con el nombre del departamento incluido
	return attractionsDataArray?.map((attraction) => ({
		...attraction,
		departmentName: departmentMap[attraction.departmentID] || 'Unknown', // Asignar 'Unknown' si no se encuentra el ID
	}));
}

export function countAttractionsByCity(arrayAttractions) {
	const counter = {};
	arrayAttractions.forEach((attraction) => {
		const { attractionID, cityID, cityName, departmentID } = attraction;
		if (counter[cityName]) {
			counter[cityName].count++;
		} else {
			counter[cityName] = {
				attractionID,
				cityID,
				cityName,
				departmentID,
				count: 1,
			};
		}
	});
	return counter;
}

function getUniqueDepartmentIDs(array) {
	return [...new Set(array?.map((rawData) => rawData.departmentID))];
}

export function departmentsData(array, fetchDepartmentFn, setDepartmentsFn) {
	const departmentIDs = getUniqueDepartmentIDs(array);
	Promise.all(departmentIDs.map((id) => fetchDepartmentFn(id))).then(setDepartmentsFn);
}
