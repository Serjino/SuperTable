import { FormControlLabel, Checkbox } from "@mui/material";
import { ISuperOption } from "../SuperOptions/SuperOptions.def";
import { theme } from "../../../global/theme";
import React from "react";

interface ISuperOptionProps {
	option: ISuperOption;
}

export function SuperOption(props: ISuperOptionProps) {
	const { option } = props;

	const [checked, setChecked] = React.useState(option.checked)

	return (
		<FormControlLabel
			key={option.label}
			control={<Checkbox checked={checked} onChange={e => setChecked(!!e.currentTarget.checked)} size="small" />}
			label={option.label}
            sx={{
                p: theme.spacing(0, 2)
            }}
		/>
	);
}
