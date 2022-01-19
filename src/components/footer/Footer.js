import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./styles.css";

// function Copyright(props) {
// 	return (
// 		<Typography
// 			variant="body2"
// 			color="text.secondary"
// 			align="center"
// 			{...props}
// 		>
// 			{"Copyright © "}
// 			<Link to="">Your Website</Link> {new Date().getFullYear()}
// 			{"."}
// 		</Typography>
// 	);
// }
export default function Footer() {
	const footers = [
		{
			col1: "Farms",
			col2: "Staking",
			col3: "Docs",
		},
		{
			col1: "Twitter",
			col2: "Telegram",
			col3: "Github",
		},
	];
	return (
		<Container
			maxWidth="md"
			component="footer"
			sx={{
				borderTop: () => `1px solid #00a8e8`,
				mt: 4,
				py: [3, 6],
			}}
		>
			<Grid container spacing={4} justifyContent="space-evenly">
				{footers.map((footer) => (
					<Grid item xs={6} sm={3} key={footer.col1}>
						<Typography
							variant="h6"
							color="primary.contrastText"
							gutterBottom
							className="footerLinks"
						>
							{footer.col1}
						</Typography>
						<Typography
							variant="h6"
							color="primary.contrastText"
							gutterBottom
							className="footerLinks"
						>
							{footer.col3}
						</Typography>
						<Typography
							variant="h6"
							color="primary.contrastText"
							gutterBottom
							className="footerLinks"
						>
							{footer.col2}
						</Typography>
					</Grid>
				))}
			</Grid>
			{/* <Copyright sx={{ mt: 5 }} /> */}
		</Container>
	);
}
