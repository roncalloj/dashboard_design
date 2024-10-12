export function counter(targetArray, counterParameter) {
	const counter = {};
	targetArray.forEach((item) => {
		const key = item[counterParameter];
		if (counter[key]) {
			counter[key].count++;
		} else {
			counter[key] = {
				...item,
				count: 1,
			};
		}
	});
	return counter;
}
