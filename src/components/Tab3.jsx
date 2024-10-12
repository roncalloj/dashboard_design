import { useEffect, useMemo, useState } from 'react';
import '../App.css';
import '../ColombiaDashboard.css';

const airports_url = 'https://api-colombia.com/api/v1/Airport';
const regions_url = 'https://api-colombia.com/api/v1/Region/';

export function Tab3() {
	const [airportsData, setAirportsData] = useState([]);

	async function fetchAirports() {
		try {
			const response = await fetch(airports_url);
			const data = await response.json();

			if (data.Error) return data.Error;

			return data?.map((airport) => ({
				airportID: airport.id,
				airportType: airport.type,
				regionID: airport.department.regionId,
				departmentName: airport.department.name,
				cityName: airport.city.name,
			}));
		} catch (Error) {
			throw new Error('Could not make your search');
		}
	}

	const allAirportsResults = () => {
		fetchAirports().then((airportsResults) => setAirportsData(airportsResults));
	};

	function countAirportsByCity(airportsData) {
		const counter = {};
		airportsData.forEach((airport) => {
			const { airportID, airportType, regionID, departmentName, cityName } = airport;
			if (counter[cityName]) {
				counter[cityName].count++;
			} else {
				counter[cityName] = {
					airportID,
					airportType,
					regionID,
					departmentName,
					cityName,
					count: 1,
				};
			}
		});
		return counter;
	}

	const cityCounter = useMemo(() => countAirportsByCity(airportsData), [airportsData]);

	//Convertir el objeto en arreglo y se ordenan los objetos por el número de apariciones en orden descendente
	const arrayCityCounter = useMemo(() => {
		const cityArray = Object.values(cityCounter);
		return cityArray.sort((a, b) => b.count - a.count);
	}, [cityCounter]);

	const [airportsRegions, setAirportsRegions] = useState([]);

	async function fetchRegions(regionID) {
		if (regionID === '') return null;

		try {
			const response = await fetch(`${regions_url}${regionID}`);
			const json = await response.json();

			if (json.Error) return json.Error;
			const region = json;

			return {
				regionID: region.id,
				regionName: region.name,
			};
		} catch (Error) {
			throw new Error('Could not make your search');
		}
	}

	function consolidatedAirportsData(arrayCityCounter, airportsRegions) {
		if (airportsRegions?.length > 0) {
			const regionMap = Object.fromEntries(
				airportsRegions?.map((region) => [region.departmentID, region.departmentName])
			);

			return arrayCityCounter?.map((airport) => ({
				...airport,
				regionName: regionMap[airport.regionID] || 'Unknown', // Asignar 'Unknown' si no se encuentra el ID
			}));
		}
	}

	useEffect(() => {
		function getUniqueRegionIDs(array) {
			return [...new Set(array?.map((rawData) => rawData.regionID))];
		}

		function regionsName(array, fetchRegionsFn, setRegionsFn) {
			const regionIDs = getUniqueRegionIDs(array);
			Promise.all(regionIDs.map((id) => fetchRegionsFn(id))).then(setRegionsFn);
		}
		if (arrayCityCounter?.length > 0) {
			regionsName(arrayCityCounter, fetchRegions, setAirportsRegions);
		}
	}, [arrayCityCounter]);

	useEffect(allAirportsResults, []);

	const attractionsWithRegionsNames = consolidatedAirportsData(arrayCityCounter, airportsRegions);

	const hasAirports = attractionsWithRegionsNames?.length > 0;

	return (
		<>
			{hasAirports ? (
				<table border="1" cellSpacing="0" cellPadding="5">
					<thead>
						<tr className="table-header">
							<th>Departamento</th>
							<th>Ciudad</th>
							<th>Conteo</th>
						</tr>
					</thead>
					<tbody>
						{attractionsWithRegionsNames.map((airport) => (
							<tr key={airport.airportID}>
								<td className="table-data">{airport.departmentName}</td>
								<td className="table-data">{airport.cityName}</td>
								<td className="table-data">{airport.count}</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p> Cargando... </p>
			)}
		</>
	);
}
