import { capitalizeWords } from '../utilities/capitalizing.js';

export async function handlePresidentsData(presidentsData) {
	const allPoliticalParties = presidentsData?.map((president) => {
		const { id, politicalParty } = president;
		const capitalPoliticalParty = capitalizeWords(politicalParty);

		return {
			presidentID: id,
			politicalParty: capitalPoliticalParty,
		};
	});

	return allPoliticalParties;
}
