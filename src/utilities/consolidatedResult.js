export function consolidatedResult(mainDataArray, complementDataArray, idKey, nameKey) {
	if (complementDataArray?.length > 0) {
		const complementDataMap = Object.fromEntries(
			complementDataArray?.map((item) => [item[idKey], item[nameKey]])
		);

		return mainDataArray.map((item) => {
			if (Object.prototype.hasOwnProperty.call(item, idKey)) {
				return {
					...item,
					[nameKey]: complementDataMap[item[idKey]] || 'Unknown', // Use dynamic keys
				};
			} else {
				return item;
			}
		});
	}
}
