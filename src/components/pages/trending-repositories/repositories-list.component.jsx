import React from 'react';
import useStyles from "./repositories-list.style";
import List from "@material-ui/core/List";
import RepositoriesListRow from "./repositories-list-row.component";
import {getMostStarredRepositories} from "./repositories-list.service";

export default function RepositoriesList() {
	const classes = useStyles();
	const [repositoriesData, setRepositoriesData] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		getMostStarredRepositories()
			.then(result => {
				setIsLoading(false);
				setRepositoriesData(result.data.items);
				console.log(result.data.items);
			})
			.catch(error => console.log("Error in loading repositories"));
	}, []);


	return (
		<List className={classes.root}>
			{
				repositoriesData && repositoriesData.map((repository, index) => {
					return (
						<RepositoriesListRow
							key={repository.id}
							userName={repository.owner.login}
							avatar={repository.owner.avatar_url}
							repositoryName={repository.name}
							description={repository.description}
							numberOfStars={repository.stargazers_count}
							numberOfIssues={repository.open_issues_count}
						/>
						)
				})
			}
		</List>
	);
}
