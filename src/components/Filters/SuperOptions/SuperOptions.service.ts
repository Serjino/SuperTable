import { ISuperOption, ISuperOptionProps } from "./SuperOptions.def"

export const NO_OPTION_TEXT = "Нет данных"
export const NO_SEARCH_MATCH_TEXT = "Ничего не найдено"

export function sortOptions(options: ISuperOption[], optionsParams: ISuperOptionProps["optionsParams"]) {
    if (optionsParams?.disableSort) {
        return options
    }
    if (optionsParams?.customSort) {
        return optionsParams.customSort(options)
    }
    if (optionsParams?.sortOrder == "ascending" || optionsParams?.sortOrder == undefined) {
        return options.sort((_optionA, _optionB) => {
            if (_optionA.label > _optionB.label) {
                return 1
            }
            if (_optionA.label < _optionB.label) {
                return -1
            }
            return 0
        })
    }
    else {
        return options.sort((_optionA, _optionB) => {
            if (_optionA.label > _optionB.label) {
                return -1
            }
            if (_optionA.label < _optionB.label) {
                return 1
            }
            return 0
        })
    }
}

export function eraseDuplicates(options: ISuperOption[]) {
    return options.filter((option, index, options) =>
        index === options.findIndex((_option) => (
            _option.label === option.label
        ))
    )
}