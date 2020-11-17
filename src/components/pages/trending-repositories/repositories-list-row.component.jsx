import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import useStyles from "./repositories-list-row.style";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import StarIcon from '@material-ui/icons/Star';
import BugReportIcon from '@material-ui/icons/BugReport';
import Divider from "@material-ui/core/Divider";
import * as PropTypes from "prop-types";

export default function RepositoriesListRow(props) {
	const classes = useStyles();

	return (
		<React.Fragment>
			<ListItem className={classes.listItem} alignItems="flex-start">
				<Grid className={classes.gridContainer} container spacing={3}>
					<Grid item xs={2}>
						<Avatar className={classes.avatar} variant={"square"} alt="Remy Sharp" src={props.avatar}/>
					</Grid>
					<Grid item xs={10}>
						<Typography className={classes.repositoryName} variant={"h4"}>
							{props.repositoryName}
						</Typography>
						<Typography className={classes.description} variant={"body1"}>
							{props.description}
						</Typography>
						<Grid className={classes.otherDetailsContainer} container spacing={3}>
							<Grid item xs={3}>
								<Typography className={classes.otherDetails} variant={"body1"}>
									<StarIcon className={classes.starIcon}/> Stars: {props.numberOfStars}
								</Typography>
							</Grid>
							<Grid item xs={3}>
								<Typography className={classes.otherDetails} variant={"body1"}>
									<BugReportIcon className={classes.bugReportIcon}/> Issues: {props.numberOfIssues}
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography className={classes.otherDetails} variant={"body2"}>
									Submitted {props.timeInterval} days ago by {props.userName}
								</Typography>
							</Grid>
						</Grid>
					</Grid>

				</Grid>

			</ListItem>
			<Divider/>
		</React.Fragment>
	);
}

RepositoriesListRow.propTypes = {
	/** User avatar */
	avatar: PropTypes.string,
	/** UserName */
	userName: PropTypes.string,
	/** Repository description. */
	description: PropTypes.string,
	/** Repository name. */
	repositoryName: PropTypes.string,
	/** Number of stars for the repository */
	numberOfStars: PropTypes.number,
	/** Number of issues for the repository */
	numberOfIssues: PropTypes.number,
	/** Time interval */
	timeInterval: PropTypes.number,

};

RepositoriesListRow.defaultProps = {
	avatar: require("../../../assets/icon/programmer.png").default,
	userName: "UserName",
	description: "Description",
	repositoryName: "Repository Name",
	numberOfStars: 0,
	numberOfIssues: 0,
	timeInterval:null
};
