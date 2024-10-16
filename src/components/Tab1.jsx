import '../App.css';
import '../ColombiaDashboard.css';
import { usePresidents } from '../hooks/usePresidents.js';

export function Tab1() {
	const { countedParties } = usePresidents();

	const haspresidents = countedParties?.length > 0;

	return (
		<>
			{haspresidents ? (
				<section className="table-section">
					<h2>Presidentes por partidos políticos</h2>
					<table border="1" cellSpacing="0" cellPadding="5">
						<thead>
							<tr className="table-header">
								<th>Partido político</th>
								<th>Conteo</th>
							</tr>
						</thead>
						<tbody>
							{countedParties.map((party) => (
								<tr key={party.presidentID}>
									<td className="table-data">{party.politicalParty}</td>
									<td className="table-data">{party.count}</td>
								</tr>
							))}
						</tbody>
					</table>
				</section>
			) : (
				<p> Cargando... </p>
			)}
		</>
	);
}
