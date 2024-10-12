export function consolidatedAttractions(attractionsDataArray, attractionsDepartmentsArray) {
	if (attractionsDepartmentsArray?.length > 0) {
		const departmentMap = Object.fromEntries(
			attractionsDepartmentsArray?.map((department) => [department.departmentID, department.departmentName])
		);

		return attractionsDataArray?.map((attraction) => ({
			...attraction,
			departmentName: departmentMap[attraction.departmentID] || 'Unknown', // Asignar 'Unknown' si no se encuentra el ID
		}));
	}
}

function getUniqueDepartmentIDs(array) {
	return [...new Set(array?.map((rawData) => rawData.departmentID))];
}

export function departmentsData(array, fetchDepartmentFn, setDepartmentsFn) {
	const departmentIDs = getUniqueDepartmentIDs(array);
	Promise.all(departmentIDs.map((id) => fetchDepartmentFn(id))).then(setDepartmentsFn);
}
