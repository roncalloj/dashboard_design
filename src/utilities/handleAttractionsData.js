export async function handleAttractionsData(attractionsData) {
	return attractionsData?.map((attraction) => ({
		attractionID: attraction.id,
		cityID: attraction.city.id,
		cityName: attraction.city.name,
		departmentID: attraction.city.departmentId,
	}));
}
