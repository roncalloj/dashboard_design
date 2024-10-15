import '../App.css';
import '../ColombiaDashboard.css';
import { useAirports } from '../hooks/useAirports.js';

export function Tab3() {
	const { airportsResults } = useAirports();

	const hasAirports = airportsResults?.length > 0;

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
						{airportsResults.map((airport) => (
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
