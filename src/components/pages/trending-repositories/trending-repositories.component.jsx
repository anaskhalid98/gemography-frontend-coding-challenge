import React from 'react';
import useStyles from "./trending-repositories.style";
import Typography from "@material-ui/core/Typography";


export default function TrendingRepositoriesPage() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography>
				Hello React
			</Typography>
		</div>
	);
}
