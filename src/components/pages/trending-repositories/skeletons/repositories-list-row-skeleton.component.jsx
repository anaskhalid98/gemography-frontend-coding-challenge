import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import useStyles from "./repositories-list-row-skeleton.style";
import Skeleton from '@material-ui/lab/Skeleton';


export default function RepositoriesListRowSkeleton() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<ListItem className={classes.listItem} alignItems="flex-start">
				<Grid className={classes.gridContainer} container spacing={3}>
					<Grid  item xs={2}>
						<Skeleton className={classes.avatar}   animation="wave"  />
					</Grid>
					<Grid item xs={10}>
						<Typography className={classes.repositoryName} variant={"h4"}>
							<Skeleton  animation="wave" height={20} width={"60%"}/>
						</Typography>
						<Typography className={classes.description} variant={"body1"}>
							<Skeleton  animation="wave" height={10} width={"100%"}/>
							<Skeleton  animation="wave" height={10} width={"100%"}/>
							<Skeleton  animation="wave" height={10} width={"50%"}/>
						</Typography>
						<Grid className={classes.otherDetailsContainer} container spacing={3}>
							<Grid item xs={3}>
								<Skeleton animation="wave" height={10} width={"70%"}/>
							</Grid>
							<Grid item xs={3}>
								<Skeleton  animation="wave" height={10} width={"70%"}/>

							</Grid>
							<Grid item xs={6}>
								<Skeleton animation="wave" height={10} width={"70%"}/>

							</Grid>
						</Grid>
					</Grid>

				</Grid>

			</ListItem>
			<Divider/>
		</React.Fragment>
	);
}
