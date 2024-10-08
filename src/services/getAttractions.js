const attractions_url = 'https://api-colombia.com/api/v1/TouristicAttraction';

export async function getTouristicAttractions() {
	try {
		const response = await fetch(attractions_url);
		const data = await response.json();

		if (data.Error) return data.Error;

		return data?.map((attraction) => ({
			attractionID: attraction.id,
			cityID: attraction.city.id,
			cityName: attraction.city.name,
			departmentID: attraction.city.departmentId,
		}));
	} catch (Error) {
		throw new Error('Could not make your search');
	}
}
