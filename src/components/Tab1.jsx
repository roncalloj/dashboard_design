import '../App.css';
import { usePresidents } from '../hooks/usePresidents.js';

export function Tab1() {
	const { countedParties } = usePresidents();

	const haspresidents = countedParties?.length > 0;

	return (
		<div>
			{haspresidents ? (
				<table border="1" cellSpacing="0" cellPadding="5">
					<thead>
						<tr>
							<th>Partido político</th>
							<th>Conteo</th>
						</tr>
					</thead>
					<tbody>
						{countedParties.map((party) => (
							<tr key={party.presidentID}>
								<td>{party.politicalParty}</td>
								<td>{party.count}</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p> Sin resultados para mostrar </p>
			)}
		</div>
	);
}
