import '../App.css';
import '../ColombiaDashboard.css';
import { useAttractions } from '../hooks/useAttractions.js';

export function Tab2() {
	const { attractionsResults } = useAttractions();

	const hasTourisicAttractions = attractionsResults?.length > 0;

	return (
		<>
			{hasTourisicAttractions ? (
				<table border="1" cellSpacing="0" cellPadding="5">
					<thead>
						<tr className="table-header">
							<th>Departamento</th>
							<th>Ciudad</th>
							<th>Conteo</th>
						</tr>
					</thead>
					<tbody>
						{attractionsResults.map((attraction) => (
							<tr key={attraction.attractionID}>
								<td className="table-data">{attraction.departmentName}</td>
								<td className="table-data">{attraction.cityName}</td>
								<td className="table-data">{attraction.count}</td>
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
