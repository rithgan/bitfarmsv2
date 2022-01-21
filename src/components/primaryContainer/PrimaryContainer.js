import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WithdrawSection from "../withdrawSection/WithdrawSection";
import DepositSection from "../depositSection/DepositSection";
import "./styles.css";

export default function PrimaryContainer() {
	return (
		<div>
			<Accordion className="accordion">
				<AccordionSummary
					expandIcon={<ExpandMoreIcon sx={{ color: "#0ca0d4" }} />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					className="accordionSummary"
				>
					{/* <Box className="stats" sx={{ width: "8% " }}> */}
					{/* 	<img src="./BFM44.png" alt="token" width="64px" /> */}
					{/* </Box> */}
					{/* <Box className="stats" sx={{ width: "26%" }}> */}
					{/* 	<Typography> */}
					{/* 		<span>Stake</span> BFS */}
					{/* 	</Typography> */}
					{/* 	buy BFS */}
					{/* </Box> */}
					{/* <Box sx={{ width: "22%" }} className="stats"> */}
					{/* 	<Typography> */}
					{/* 		<span>TVL</span> */}
					{/* 	</Typography> */}
					{/* 	$40.5MN */}
					{/* </Box> */}
					{/* <Box sx={{ width: "22%" }} className="stats"> */}
					{/* 	<Typography> */}
					{/* 		<span>APY</span> */}
					{/* 	</Typography> */}
					{/* 	150% */}
					{/* </Box> */}
					{/* <Box sx={{ width: "22%" }} className="stats"> */}
					{/* 	<Typography> */}
					{/* 		<span>Vesting</span> */}
					{/* 	</Typography> */}
					{/* 	1 months */}
					{/* </Box> */}
					<Grid container spacing={2} justifyContent="space-between">
						<Grid item xs={6} md={1} className="stats">
							<img src="./BFM44.png" alt="token" width="64px" />
						</Grid>
						<Grid item xs={6} md={2} className="stats">
							<Typography>
								<span>Stake</span> BFS
							</Typography>
							buy BFS
						</Grid>
						<Grid item xs={4} md={3} className="stats">
							<Typography>
								<span>TVL</span>
							</Typography>
							$40.5MN
						</Grid>
						<Grid item xs={4} md={3} className="stats">
							<Typography>
								<span>APY</span>
							</Typography>
							150%
						</Grid>
						<Grid item xs={4} md={3} className="stats">
							<Typography>
								<span>Vesting</span>
							</Typography>
							1 months
						</Grid>
					</Grid>
				</AccordionSummary>
				<AccordionDetails
					className="accordionDetails"
					sx={{ paddingTop: "16px" }}
				>
					<Grid container spacing={2}>
						<Grid
							item
							xs={12}
							md={6}
							sx={{
								padding: "0px !important",
							}}
						>
							<DepositSection />
						</Grid>
						<Grid
							item
							xs={12}
							md={6}
							sx={{
								padding: "0px !important",
							}}
						>
							<WithdrawSection />
						</Grid>
					</Grid>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
