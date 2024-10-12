import '../App.css';
import { useAttractions } from '../hooks/useAttractions.js';
import { useAttractionsDepartments } from '../hooks/useAttractionsDepartments.js';
import { consolidatedAttractions } from '../utilities/attractionsUtils.js';

export function Tab2() {
	const { arrayCityCounter } = useAttractions();
	const { attractionsDepartments } = useAttractionsDepartments({ arrayCityCounter });

	const attractionsWithDepartmentNames = consolidatedAttractions(arrayCityCounter, attractionsDepartments);

	const hasTourisicAttractions = attractionsWithDepartmentNames?.length > 0;

	return (
		<>
			{hasTourisicAttractions ? (
				<table border="1" cellSpacing="0" cellPadding="5">
					<thead>
						<tr className="table-header">
							<th>Ciudad</th>
							<th>Departamento</th>
							<th>Conteo</th>
						</tr>
					</thead>
					<tbody>
						{attractionsWithDepartmentNames.map((attraction) => (
							<tr key={attraction.attractionID}>
								<td className="table-data">{attraction.cityName}</td>
								<td className="table-data">{attraction.departmentName}</td>
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
