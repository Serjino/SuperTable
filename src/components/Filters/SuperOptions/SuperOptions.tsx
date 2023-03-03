import { FormControlLabel, Checkbox, CircularProgress } from "@mui/material";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import React from "react";

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

export function SuperOptions(props: ISuperOptionProps) {

    const { options, optionsParams, getIsOptionListRendered } = props

    const targetOptions = getTargetOptions()

    const [isRendered, setIsRendered] = React.useState(false)

    React.useEffect(() => {
        setIsRendered(true)
        setTimeout(() => getIsOptionListRendered(true), 1)
    }, [])

    React.useEffect(() => {
        console.log(isRendered)
    }, [isRendered])

    function sortOptions(options: ISuperOption[], optionsParams: ISuperOptionProps["optionsParams"]) {
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

    function eraseDuplicates(options: ISuperOption[]) {
        return options.filter((option, index, options) =>
            index === options.findIndex((_option) => (
                _option.label === option.label
            ))
        )
    }

    function getTargetOptions() {
        let targetArray = sortOptions(options || [], optionsParams)
        return eraseDuplicates(targetArray)
    }

    return (

        <FormGroup
            sx={{
                p: 1
            }}
        >
            {(!isRendered || options == null) && <CircularProgress />}
            {isRendered && targetOptions.map(option => {
                return (
                    <FormControlLabel key={option.label} control={<Checkbox />} label={option.label} />
                )
            })}
        </FormGroup>
    )
}