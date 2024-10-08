import { capitalizeWords } from './capitalizing.js';

const presidents_url = 'https://api-colombia.com/api/v1/President';

export async function getPresidentsData() {
	try {
		const response = await fetch(presidents_url);
		const data = await response.json();

		if (data.Error) return data.Error;

		const allPoliticalParties = data?.map((president) => {
			const { id, politicalParty } = president;
			const capitalPoliticalParty = capitalizeWords(politicalParty);

			return {
				presidentID: id,
				politicalParty: capitalPoliticalParty,
			};
		});

		return allPoliticalParties;
	} catch (Error) {
		throw new Error('Could not make your search');
	}
}
