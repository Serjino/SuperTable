import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./global/index.sass";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { theme } from "./global/theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

ReactDOM.render(
	<BrowserRouter>
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<StyledThemeProvider theme={theme}>
					<App />
				</StyledThemeProvider>
			</ThemeProvider>
		</StyledEngineProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
