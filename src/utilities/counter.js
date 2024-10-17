export function counter(targetArray, counterParameter, storedParameter) {
	const counter = {};
	targetArray.forEach((item) => {
		const key = item[counterParameter];
		const keyToStore = item[storedParameter];
		if (counter[key]) {
			counter[key].count++;
			if (!counter[key][storedParameter].includes(keyToStore)) {
				counter[key][storedParameter].push(' / ' + keyToStore);
			}
		} else {
			counter[key] = {
				...item,
				count: 1,
				[storedParameter]: [keyToStore],
			};
		}
	});
	return counter;
}
