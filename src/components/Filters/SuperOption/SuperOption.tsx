import { FormControlLabel, Checkbox } from "@mui/material";
import { ISuperOption } from "../SuperOptions/SuperOptions.def";
import { theme } from "../../../global/theme";

interface ISuperOptionProps {
	option: ISuperOption;
}

export function SuperOption(props: ISuperOptionProps) {
	const { option } = props;

	return (
		<FormControlLabel
			key={option.label}
			control={<Checkbox size="small" />}
			label={option.label}
            sx={{
                p: theme.spacing(0, 2)
            }}
		/>
	);
}
