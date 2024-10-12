const BASE_URL = 'https://api-colombia.com/api/v1/';

export async function fetchColombiaData(endpoint) {
	if (endpoint === '') return null;

	try {
		const response = await fetch(`${BASE_URL}${endpoint}`);
		const requestedData = await response.json();

		if (requestedData.Error) return requestedData.Error;

		return requestedData;
	} catch (Error) {
		throw new Error('Could not make your search');
	}
}
