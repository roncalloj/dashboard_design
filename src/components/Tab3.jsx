import { useState } from 'react';
import '../styles/layout.css';
import '../styles/components.css';
import { useAirports } from '../hooks/useAirports.js';

export function Tab3() {
	const [selectedKey, setSelectedKey] = useState({ label: 'Ciudad', parameter: 'cityName' });
	const { airportsResults } = useAirports(selectedKey.parameter);

	const groupingOptions = [
		{ label: 'Ciudad', parameter: 'cityName' },
		{ label: 'Departamento', parameter: 'departmentName' },
		{ label: 'Región', parameter: 'regionName' },
	];

	const hasAirports = airportsResults?.length > 0;

	const handleSelectChange = (e) => {
		const selectedOption = groupingOptions.find((option) => option.parameter === e.target.value);
		setSelectedKey(selectedOption);
	};

	return (
		<>
			{hasAirports ? (
				<section className="table-section">
					<h2>Aeropuertos por {selectedKey.label.toLowerCase()}</h2>
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
								<th>Tipo</th>
								<th>Conteo</th>
							</tr>
						</thead>
						<tbody>
							{airportsResults.map((airport) => (
								<tr key={airport.airportID}>
									<td className="table-data">{airport[selectedKey.parameter]}</td>
									<td className="table-data">{airport.airportType.join(' / ')}</td>
									<td className="table-data">{airport.count}</td>
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
