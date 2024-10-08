import '../App.css';
import { useAttractions } from '../hooks/useAttractions.js';

export function Tab2() {
	const { countedAttractions } = useAttractions();

	const hasTourisicAttractions = countedAttractions?.length > 0;

	return (
		<div>
			{hasTourisicAttractions ? (
				<table border="1" cellSpacing="0" cellPadding="5">
					<thead>
						<tr>
							<th>Ciudad</th>
							<th>Departamento</th>
							<th>Conteo</th>
						</tr>
					</thead>
					<tbody>
						{countedAttractions.map((attraction) => (
							<tr key={attraction.attractionID}>
								<td>{attraction.cityName}</td>
								<td>{attraction.departmentName}</td>
								<td>{attraction.count}</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p> No results </p>
			)}
		</div>
	);
}
