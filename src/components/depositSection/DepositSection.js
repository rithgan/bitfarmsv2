import React from "react";
import ApproveButton from "../buttons/ApproveButton";
import DepositButton from "../buttons/DepositButton";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputTextField from "../InputTextField/InputTextField";
import "./styles.css";

export default function DepositSection() {
	return (
		<Box
			sx={{
				width: "50%",
				border: `1px solid #0ca0d4`,
				borderRadius: "12px",
				margin: "1rem",
			}}
		>
			<Container sx={{ padding: "2rem" }}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						marginBottom: "0.5rem",
					}}
				>
					<Typography className="stats">
						<p>
							<span>APY</span>
						</p>
						150%
					</Typography>
					<ApproveButton />
				</Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						marginTop: "0.5rem",
					}}
				>
					<Typography className="stats">
						<p>
							<span>APY</span>
						</p>
						<InputTextField />
					</Typography>
					<DepositButton />
				</Box>
			</Container>
		</Box>
	);
}
