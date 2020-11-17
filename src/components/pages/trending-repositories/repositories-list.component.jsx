import React from 'react';
import useStyles from "./repositories-list.style";
import List from "@material-ui/core/List";

export default function RepositoriesList(props) {
	const classes = useStyles();

	return (
		<List className={classes.root}>
		</List>
	);
}
