export async function handleAirportsData(airportsData) {
	return airportsData?.map((airport) => ({
		airportID: airport.id,
		airportType: airport.type,
		regionID: airport.department.regionId,
		departmentName: airport.department.name,
		cityName: airport.city.name,
	}));
}
