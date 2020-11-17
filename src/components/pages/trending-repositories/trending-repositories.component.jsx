import React from 'react';
import useStyles from "./trending-repositories.style";
import Typography from "@material-ui/core/Typography";
import RepositoriesList from "./repositories-list.component";
import Container from "@material-ui/core/Container";


export default function TrendingRepositoriesPage() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Container maxWidth="lg">
				<main>
					<RepositoriesList/>
				</main>
			</Container>
		</React.Fragment>
	);
}
