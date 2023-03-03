import { Autocomplete, AutocompleteProps, TextField, TextFieldProps } from "@mui/material";
import { ComponentType } from "react";

interface SuperAutocompleteProps extends Omit<AutocompleteProps<any, any, any, any>, 'renderInput'> {
    InputComponent?: ComponentType<TextFieldProps>
}

export function SuperAutoComplete(props: SuperAutocompleteProps) {

    const { InputComponent } = props

    const TargetInputComponent = InputComponent || TextField

    return (
        <Autocomplete
            renderInput={(params) => <TargetInputComponent {...params} />}
            size="small"
            {...props}
        />
    )
}