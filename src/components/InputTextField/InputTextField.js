import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
	"& label.Mui-focused": {
		// color: "green",
	},
	"& .MuiOutlinedInput-input": {
		padding: "7.5px 14px",
		color: "white",
	},
	"& .MuiInput-underline:after": {
		// borderBottomColor: "green",
	},
	"& .MuiOutlinedInput-root": {
		background: "transparent",
		"& fieldset": {
			borderColor: "#9c9b9b",
			color: "white",
		},
		"&:hover fieldset": {
			borderColor: "#9c9b9b",
		},
		"&.Mui-focused fieldset": {
			// borderColor: "#9c9b9b",
		},
	},
});

export default function InputTextField() {
	return <CustomTextField id="outlined-basic" />;
}
