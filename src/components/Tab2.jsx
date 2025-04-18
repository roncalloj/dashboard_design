import { useState } from 'react';
import '../styles/layout.css';
import '../styles/components.css';
import { useAttractions } from '../hooks/useAttractions.js';

export function Tab2() {
	const [selectedKey, setSelectedKey] = useState({ label: 'Ciudad', parameter: 'cityName' });
	const { attractionsResults } = useAttractions(selectedKey.parameter);

	const groupingOptions = [
		{ label: 'Ciudad', parameter: 'cityName' },
		{ label: 'Departamento', parameter: 'departmentName' },
	];

	const hasTourisicAttractions = attractionsResults?.length > 0;

	const handleSelectChange = (e) => {
		const selectedOption = groupingOptions.find((option) => option.parameter === e.target.value);
		setSelectedKey(selectedOption);
	};

	return (
		<>
			{hasTourisicAttractions ? (
				<section className="table-section">
					<h2>Atracciones turísticas por {selectedKey.label.toLowerCase()}</h2>
					<div className="dropdown">
						<label>Agrupar por: </label>
						<select value={selectedKey.parameter} onChange={handleSelectChange}>
							{groupingOptions.map((option) => (
								<option key={option.parameter} value={option.parameter}>
									{option.label}
								</option>
							))}
						</select>
					</div>
					<table border="1" cellSpacing="0" cellPadding="5">
						<thead>
							<tr className="table-header">
								<th>{selectedKey.label}</th>
								<th>Conteo</th>
							</tr>
						</thead>
						<tbody>
							{attractionsResults.map((attraction) => (
								<tr key={attraction.attractionID}>
									<td className="table-data">{attraction[selectedKey.parameter]}</td>
									<td className="table-data">{attraction.count}</td>
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
