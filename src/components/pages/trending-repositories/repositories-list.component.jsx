import React from 'react';
import useStyles from "./repositories-list.style";
import List from "@material-ui/core/List";
import RepositoriesListRow from "./repositories-list-row.component";

export default function RepositoriesList(props) {
	const classes = useStyles();

	return (
		<List className={classes.root}>
			<RepositoriesListRow/>
			<RepositoriesListRow/>
			<RepositoriesListRow/>
			<RepositoriesListRow/>
			<RepositoriesListRow/>
		</List>
	);
}
