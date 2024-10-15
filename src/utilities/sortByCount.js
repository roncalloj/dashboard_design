export function sortByCount(object) {
	const array = Object.values(object);
	return array.sort((a, b) => b.count - a.count);
}
