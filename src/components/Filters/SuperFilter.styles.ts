import { Box, Paper, Popper } from "@mui/material";
import styled from "styled-components";

export const PopperStyled = styled(Popper)`
	border-radius: ${({ theme }) => theme.spacing(1)};
`;

export const PopperInnerStyled = styled(Paper)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-width: 250;
	height: 100%;
	padding: ${({ theme }) => theme.spacing(1, 0)};
`;

export const ButtonWrapperStyled = styled(Box)`
	display: flex;
	justify-content: space-between;
	gap: ${({ theme }) => theme.spacing(2)};
	padding: ${({ theme }) => theme.spacing(1, 2)};
`;

export const TitleWrapperStyled = styled(Box)`
	display: flex;
	align-items: center;
	width: 100%;
	padding: ${({ theme }) => theme.spacing(1, 1)};
`;

PopperStyled.defaultProps = {
	placement: "bottom",
};
