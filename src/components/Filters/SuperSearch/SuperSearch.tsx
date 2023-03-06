import { TextField, TextFieldProps } from "@mui/material";
import { theme } from "../../../global/theme";
import { Search } from "@mui/icons-material";

export function SuperSearch(props: TextFieldProps) {
	return (
		<TextField
			size={"small"}
			InputProps={{
				startAdornment: (
					<Search
						sx={{
							mr: 0.5,
							ml: -0.5,
						}}
					/>
				),
			}}
			sx={{
				p: theme.spacing(1, 2),
			}}
            {...props}
		/>
	);
}
