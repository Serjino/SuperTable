import { ISuperOption } from "../components/Filters/SuperOptions/SuperOptions";

function makeid(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const optionItemsCount = 1000;
export const OPTIONS = [] as ISuperOption[];
for (let i = 0; i < optionItemsCount; i++) {
    OPTIONS.push({
        label: String(makeid(10)),
        value: String(makeid(10))
    })
}