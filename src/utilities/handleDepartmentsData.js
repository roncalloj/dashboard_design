export async function handleDepartmentsData(departmentsData) {
	return departmentsData?.map((department) => ({
		departmentID: department.id,
		departmentName: department.name,
		regionID: department.regionId,
	}));
}
