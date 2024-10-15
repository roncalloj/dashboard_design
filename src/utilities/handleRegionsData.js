export function handleRegionsData(regionsData) {
	return regionsData?.map((region) => ({
		regionID: region.id,
		regionName: region.name,
	}));
}
