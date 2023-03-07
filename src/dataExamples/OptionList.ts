import { ISuperOption } from "../components/Filters/SuperOptions/SuperOptions.def";
import { testArray as LOREM_ARRAY } from "./LoremArray";

function makeid(length: number) {
	let result = "";
	const charactersLength = LOREM_ARRAY.length;
	let counter = 0;
	while (counter <= length) {
		result += LOREM_ARRAY[(Math.floor(Math.random() * charactersLength))] + " ";
		counter += 1;
	}
	return result;
}

const optionItemsCount = 1000;
export const OPTIONS = [] as ISuperOption[];
for (let i = 0; i < optionItemsCount; i++) {
	OPTIONS.push({
		label: String(makeid(i % 10)),
		value: String(makeid(i % 10)),
		checked: false,
	});
}
