export interface ISuperOption {
    label: string,
    value: string,
    checked: boolean
    [key: string]: any
}

export interface ISuperOptionProps {
    options: ISuperOption[] | null,
    optionsParams?: {
        sortOrder?: "ascending" | "descending",
        disableSort?: boolean,
        customSort?: (options: ISuperOption[]) => ISuperOption[]
    }
    getIsOptionListRendered: (isRendered: boolean) => void
}