import React from "react";
import { theme } from "../../global/theme";
import { FilterAlt } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { SuperOptions } from "./SuperOptions/SuperOptions";
import { SuperFilterProps, SuperFilterState } from "./SuperFilter.def";
import { ButtonWrapperStyled, PopperInnerStyled, PopperStyled, TitleWrapperStyled } from "./SuperFilter.styles";
import { SuperSearch } from "./SuperSearch/SuperSearch";

export function SuperFilter(props: SuperFilterProps) {
	const { OpenBtnComponent, PoperComponent, InputComponent, options, title, disableSearch, size, optionsParams } =
		props;

	const [state, setState] = React.useState({
		isPopperOpen: false,
		anchorEl: null,
		search: "",
		options: options,
		isOptionListRendered: false,
	} as SuperFilterState);

	const ANCHOR_EL_REF = React.createRef<HTMLButtonElement>();

	const TargetOpenBtn = OpenBtnComponent || IconButton;
	const TargetInputComponent = InputComponent || SuperSearch;
	const TargetPopper = PoperComponent || PopperStyled;

	const POPPER_HEIGHT = `calc(100vh 
		- ${(state.anchorEl as HTMLElement)?.offsetHeight + (state.anchorEl as HTMLElement)?.offsetTop}px
		- ${theme.spacing(1)})`;

	let timeout: NodeJS.Timeout;

	const LOADING_OPTIONS = state.options == null || !state.isOptionListRendered;

	// React.useEffect(() => {
	//     setTimeout(() => setState(prevState => ({
	//         ...prevState,
	//         options: options
	//     })), 5000)
	// }, [])

	React.useEffect(() => {
		return () =>  {
			state.isPopperOpen && cleanUp();
		}
	}, [state.isPopperOpen]);

	function setAnchorEl(HTMLElement: EventTarget & HTMLElement) {
		setState(prevState => ({
			...prevState,
			anchorEl: HTMLElement,
		}));
	}

	function switchIsPopperOpen() {
		setState(prevState => ({
			...prevState,
			isPopperOpen: !prevState.isPopperOpen,
		}));
	}

	function updateSearchValue(value: string) {
		console.log("asda");
		clearTimeout(timeout);
		timeout = setTimeout(() => getFilteredOptions(value), 500);
	}

	function getFilteredOptions(searchValue: string) {
		setState(prevState => ({
			...prevState,
			options:
				searchValue == ""
					? options
					: options.filter(option => option.label.toLowerCase().includes(searchValue.toLowerCase())),
		}));
	}

	function getIsOptionListRendered(isRendered: boolean) {
		setState(prevState => ({
			...prevState,
			isOptionListRendered: isRendered,
		}));
	}

	function cleanUp() {
		setState(prevState => ({
			...prevState,
			isOptionListRendered: false,
			search: "",
		}));
	}

	return (
		<Box
			ref={ANCHOR_EL_REF}
			onClick={e => setAnchorEl(e.currentTarget)}
		>
			<TitleWrapperStyled>
				<Typography
					variant={"body1"}
					mr={2}
				>
					{title}
				</Typography>
				<TargetOpenBtn onClick={switchIsPopperOpen}>{!OpenBtnComponent && <FilterAlt />}</TargetOpenBtn>
			</TitleWrapperStyled>

			<TargetPopper
				open={state.isPopperOpen}
				anchorEl={state.anchorEl}
				sx={{
					height: POPPER_HEIGHT,
				}}
			>
				<PopperInnerStyled
					sx={{
						pointerEvents: LOADING_OPTIONS ? "none" : "auto"
					}}
				>
					{!disableSearch && (
						<TargetInputComponent
							disabled={LOADING_OPTIONS}
							onChange={e => updateSearchValue(e.target.value)}
						/>
					)}

					<SuperOptions
						getIsOptionListRendered={getIsOptionListRendered}
						optionsParams={optionsParams}
						options={state.options}
					/>

					<ButtonWrapperStyled>
						<Button
							disabled={LOADING_OPTIONS}
							variant={"contained"}
							size={"medium"}
						>
							Применить
						</Button>
						<Button
							disabled={LOADING_OPTIONS}
							variant={"contained"}
							size={"medium"}
						>
							Отменить
						</Button>
					</ButtonWrapperStyled>
				</PopperInnerStyled>
			</TargetPopper>
		</Box>
	);
}
