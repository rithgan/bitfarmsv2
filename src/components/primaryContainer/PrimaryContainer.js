import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
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
					<Typography className="stats" sx={{ width: "8% " }}>
						<img src="./token.png" alt="token" width="64px" />
					</Typography>
					<Typography className="stats" sx={{ width: "26%" }}>
						<p>
							<span>Stake</span> BFS
						</p>
						buy BFS
					</Typography>
					<Typography sx={{ width: "22%" }} className="stats">
						<p>
							<span>TVL</span>
						</p>
						$40.5MN
					</Typography>
					<Typography sx={{ width: "22%" }} className="stats">
						<p>
							<span>APY</span>
						</p>
						150%
					</Typography>
					<Typography sx={{ width: "22%" }} className="stats">
						<p>
							<span>Vesting</span>
						</p>
						1 months
					</Typography>
				</AccordionSummary>
				<AccordionDetails
					className="accordionDetails"
					sx={{ display: "flex" }}
				>
					<DepositSection />
					<WithdrawSection />
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
