import { ButtonProps, PopperProps, TextFieldProps } from "@mui/material"
import { ComponentType } from "react"
import { ISuperOption, ISuperOptionProps } from "./SuperOptions/SuperOptions.def"

export interface SuperFilterProps {
    title?: string,
    OpenBtnComponent?: ComponentType<ButtonProps>,
    PoperComponent?: ComponentType<PopperProps>,
    InputComponent?: ComponentType<TextFieldProps>
    options: ISuperOption[],
    disableSearch?: boolean,
    size?: 'small' | 'medium' | 'large',
    optionsParams?: ISuperOptionProps["optionsParams"]
}

export interface SuperFilterState {
    isPopperOpen: boolean
    anchorEl: PopperProps['anchorEl'],
    search: string,
    options: ISuperOption[] | null,
    isOptionListRendered: boolean
}