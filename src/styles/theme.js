import { createTheme } from "@mui/material/styles";

let theme = createTheme({
	palette: {
		primary: {
			light: "#62d1ff",
			main: "#0ca0d4",
			dark: "#0072a2",
			contrastText: "#fff",
		},
		secondary: {
			light: "#62d1ff",
			main: "#0ca0d4",
			dark: "#0072a2",
			contrastText: "#fff",
		},
	},
	typography: {
		fontSize: 14,
	},
});

export default theme;
