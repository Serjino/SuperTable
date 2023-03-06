export interface ISuperOption {
    label: string,
    value: string,
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