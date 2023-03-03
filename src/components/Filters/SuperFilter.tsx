import { FilterAlt } from "@mui/icons-material";
import { Box, Button, ButtonProps, CircularProgress, IconButton, Paper, Popper, PopperProps, TextField, Typography } from "@mui/material";
import React from "react";
import { ComponentType } from "react";
import { theme } from "../../global/theme";
import { ISuperOption, ISuperOptionProps, SuperOptions } from "./SuperOptions/SuperOptions";
import { CUSTOM_PROPS } from "./customProps";

interface SuperFilterProps {
    title?: string,
    OpenBtnComponent?: ComponentType<ButtonProps>,
    PoperComponent?: ComponentType<PopperProps>,
    options: ISuperOption[],
    disableSearch?: boolean,
    size?: 'small' | 'medium' | 'large',
    optionsParams?: ISuperOptionProps["optionsParams"]
}

interface SuperFilterState {
    isPopperOpen: boolean
    anchorEl: PopperProps['anchorEl'],
    search: string,
    options: ISuperOption[] | null,
    isOptionListRendered: boolean
}

export function SuperFilter(props: SuperFilterProps) {

    const { OpenBtnComponent, PoperComponent, options, title, disableSearch, size, optionsParams } = props

    const [state, setState] = React.useState({
        isPopperOpen: false,
        anchorEl: null,
        search: "",
        options: options,
        isOptionListRendered: false
    } as SuperFilterState)

    const targetSize: SuperFilterProps["size"] = size || "small"
    const anchorElRef = React.createRef<HTMLButtonElement>()

    const TargetOpenBtn = OpenBtnComponent || IconButton
    const TargetPopper = PoperComponent || Popper

    let timeout: NodeJS.Timeout

    // React.useEffect(() => {
    //     setTimeout(() => setState(prevState => ({
    //         ...prevState,
    //         options: options
    //     })), 10000)
    // }, [])

    function setAnchorEl(HTMLElement: EventTarget & HTMLElement) {
        setState(prevState => ({
            ...prevState,
            anchorEl: HTMLElement
        }))
    }

    function switchIsPopperOpen() {
        setState(prevState => ({
            ...prevState,
            isPopperOpen: !prevState.isPopperOpen
        }))
    }

    function updateSearchValue(value: string) {
        console.log('asda')
        clearTimeout(timeout)
        timeout = setTimeout(() => getFilteredOptions(value), 500)
    }

    function getFilteredOptions(searchValue: string) {
        setState(prevState => ({
            ...prevState,
            options: searchValue == "" ? options : options.filter(option => option.label.toLowerCase().includes(searchValue.toLowerCase()))
        }))
    }

    function getIsOptionListRendered (isRendered: boolean) {
        setState(prevState => ({
            ...prevState,
            isOptionListRendered: isRendered
        }))
    }

    return (
        <Box ref={anchorElRef} onClick={(e) => setAnchorEl(e.currentTarget)}>
            <Box display="flex" alignItems={"center"} width="100%" padding={theme.spacing(1, 1)}>
                <Typography variant="body1">
                    {title}
                </Typography>
                <TargetOpenBtn
                    onClick={switchIsPopperOpen}
                >
                    {!OpenBtnComponent && <FilterAlt />}
                </TargetOpenBtn>
            </Box>

            <TargetPopper
                open={state.isPopperOpen}
                anchorEl={state.anchorEl}
                placement="bottom"
                sx={{
                    height: `calc(100vh - ${(state.anchorEl as HTMLElement)?.offsetHeight + (state.anchorEl as HTMLElement)?.offsetTop}px - ${theme.spacing(1)})`,
                    borderRadius: 1
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        minWidth: 250,
                        height: "100%",
                        p: 2
                    }}
                >
                    {!disableSearch &&
                        <TextField
                            disabled={!state.isOptionListRendered}
                            size={targetSize == "large" ? "medium" : targetSize}
                            sx={{
                                position: "static",
                                top: 0,
                            }}
                            onChange={(e) => updateSearchValue(e.target.value)}
                        />
                    }
                    <Box
                        sx={{
                            height: "100%",
                            overflow: "auto",
                            marginY: 2
                        }}
                    >
                        <SuperOptions getIsOptionListRendered={getIsOptionListRendered} optionsParams={optionsParams} options={state.options} />
                    </Box>
                    <Box display="flex" justifyContent={"space-between"} gap={2}>
                        <Button {...{ ...CUSTOM_PROPS.button, size: targetSize }}>Применить</Button>
                        <Button  {...{ ...CUSTOM_PROPS.button, size: targetSize }}>Отменить</Button>
                    </Box>
                </Paper>
            </TargetPopper>
        </Box>
    )
}
