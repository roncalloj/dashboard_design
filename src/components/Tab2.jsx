import '../App.css';
import { useAttractions } from '../hooks/useAttractions.js';
// import { useConsolidAttractions } from '../hooks/useConsolidAttractions.js';

export function Tab2() {
	// const { attractionsResult } = useAttractions();
	const { arrayCityCounter } = useAttractions();
	// const { attractionData } = useConsolidAttractions({ arrayCityCounter });
	// const attractionsResult = [];

	const hasTourisicAttractions = arrayCityCounter?.length > 0;

	return (
		<>
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
						{arrayCityCounter.map((attraction) => (
							<tr key={attraction.attractionID}>
								<td>{attraction.cityName}</td>
								<td>{attraction.departmentID}</td>
								<td>{attraction.count}</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p> No results </p>
			)}
		</>
	);
}
