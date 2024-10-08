const department_url = 'https://api-colombia.com/api/v1/Department/';

export async function getDepartment(departmentID) {
	if (departmentID === '') return null;

	try {
		const response = await fetch(`${department_url}${departmentID}`);
		const json = await response.json();

		if (json.Error) return json.Error;
		const department = json;

		return {
			departmentID: department.id,
			departmentName: department.name,
		};
	} catch (Error) {
		throw new Error('Could not make your search');
	}
}
