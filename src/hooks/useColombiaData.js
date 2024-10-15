import { useEffect, useState } from 'react';
import { fetchColombiaData } from '../services/fetchColombiaData.js';

export function useColombiaData(endpoint, handleRawData) {
	const [colombiaData, setColombiaData] = useState([]);

	const dataResults = () => {
		fetchColombiaData(endpoint)
			.then((colombiaRawData) => handleRawData(colombiaRawData))
			.then((refinedData) => setColombiaData(refinedData));
	};

	useEffect(dataResults, [endpoint, handleRawData]);

	return { colombiaData };
}
