import { FormControlLabel, Checkbox, CircularProgress, Typography, Box } from "@mui/material";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import React from "react";
import { NO_OPTION_TEXT, eraseDuplicates, sortOptions } from "./SuperOptions.service";
import { ISuperOptionProps } from "./SuperOptions.def";
import { SuperOption } from "../SuperOption/SuperOption";
import { theme } from "../../../global/theme";

export function SuperOptions(props: ISuperOptionProps) {
	const { options, optionsParams, getIsOptionListRendered } = props;

	const targetOptions = getTargetOptions();

	const [isRendered, setIsRendered] = React.useState(false);

	React.useEffect(() => {
		setIsRendered(true);
		getIsOptionListRendered(true)
	}, [options]);

	function getTargetOptions() {
		let targetArray = sortOptions(options || [], optionsParams);
		return eraseDuplicates(targetArray);
	}

	return (
		<Box
			sx={{
				height: "100%",
				overflow: "auto",
				marginY: 1,
				marginRight: 2
			}}
		>
			<FormGroup>
				{options?.length == 0 && (
					<Typography
						variant="body1"
						p={theme.spacing(0, 2)}
					>
						{NO_OPTION_TEXT}
					</Typography>
				)}

				{(!isRendered || options == null) && <CircularProgress />}

				{isRendered &&
					targetOptions.map(option => {
						return <SuperOption option={option} />;
					})}
			</FormGroup>
		</Box>
	);
}
