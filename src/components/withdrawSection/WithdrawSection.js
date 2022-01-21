import React from "react";
import HarvestButton from "../buttons/HarvestButton";
import WithdrawButton from "../buttons/WithdrawButton";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputTextField from "../InputTextField/InputTextField";
import "./styles.css";

export default function WithdrawSection() {
	return (
		<Box
			sx={{
				// width: "50%",
				border: `1px solid #0ca0d4`,
				borderRadius: "12px",
				margin: "1rem",
			}}
		>
			<Container sx={{ padding: "2rem" }}>
				<Grid container>
					<Grid item xs={12}>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								marginBottom: "0.5rem",
							}}
						>
							<Box className="stats">
								<Typography>
									<span>APY</span>
								</Typography>
								150%
							</Box>
							<HarvestButton />
						</Box>
					</Grid>
					<Grid item xs={12}>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								marginTop: "0.5rem",
							}}
						>
							<Box className="stats">
								<Typography>
									<span>Deposited : 0 </span>
								</Typography>
								<InputTextField />
							</Box>
							<WithdrawButton />
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
		// <Grid
		// 	container
		// 	spacing={6}
		// 	sx={{
		// 		border: `1px solid #0ca0d4`,
		// 		borderRadius: "12px",
		// 		margin: "1rem",
		// 		padding: "2rem",
		// 	}}
		// >
		// 	<Grid item xs={6} sx={{ padding: "0px !important" }}>
		// 		<Box className="stats">
		// 			<Typography>
		// 				<span>APY</span>
		// 			</Typography>
		// 			150%
		// 		</Box>
		// 	</Grid>{" "}
		// 	<Grid
		// 		item
		// 		xs={6}
		// 		sx={{ padding: "0px !important", textAlign: "end" }}
		// 	>
		// 		<Box className="stats">
		// 			<HarvestButton />
		// 		</Box>
		// 	</Grid>
		// 	<Grid item xs={6} sx={{ padding: "0px !important" }}>
		// 		<Box className="stats">
		// 			<InputTextField />
		// 		</Box>
		// 	</Grid>{" "}
		// 	<Grid
		// 		item
		// 		xs={6}
		// 		sx={{ padding: "0px !important", textAlign: "end" }}
		// 	>
		// 		<Box className="stats">
		// 			<WithdrawButton />
		// 		</Box>
		// 	</Grid>
		// 	{/* <Grid item xs={6}> */}
		// 	{/* 	<Box className="stats"> */}
		// 	{/* 		<Typography> */}
		// 	{/* 			<span>APY</span> */}
		// 	{/* 		</Typography> */}
		// 	{/* 		150% */}
		// 	{/* 	</Box> */}
		// 	{/* </Grid> */}
		// </Grid>
	);
}
