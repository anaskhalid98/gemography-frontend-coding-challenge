import React from 'react';
import useStyles from "./repositories-list.style";
import List from "@material-ui/core/List";
import RepositoriesListRow from "./repositories-list-row.component";
import {getMostStarredRepositories} from "./repositories-list.service";
import RepositoriesListRowSkeleton from "./skeletons/repositories-list-row-skeleton.component";
import InfiniteScroll from "react-infinite-scroll-component";
import {getTimeIntervalInDay} from "../../utils";
import uuid from 'react-uuid';



export default function RepositoriesList() {
	let current_day = new Date();
	const classes = useStyles();
	const [repositoriesData, setRepositoriesData] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [page, setPage] = React.useState(0)

	React.useEffect(() => {
		getMostStarredRepositories(page)
			.then(result => {
				setIsLoading(false);
				setRepositoriesData([...repositoriesData, ...result.data.items]);
			})
			.catch(error => console.log("Error in loading repositories"));
	}, [page]);

	const updatePageNumber = ()=>{
		setPage(1+page);
	}

	if (isLoading) {
		return (
			<List className={classes.root}>
				{
					Array(6).fill(0).map((id,index) => {
						return (
							<RepositoriesListRowSkeleton key={uuid()}/>
						)
					})
				}
			</List>
		)
	}
	return (
		<InfiniteScroll
			dataLength={repositoriesData.length}
			next={updatePageNumber}
			hasMore={true}
			loader={
				<List className={classes.root}>
					{
						Array(3).fill(0).map((id,index) => {
							return (
								<RepositoriesListRowSkeleton key={uuid()}/>
							)
						})
					}
				</List>
			}
		>
			<List className={classes.root}>
				{
					repositoriesData && repositoriesData.map((repository, index) => {
						let creation_date = new Date(repository.created_at);
						return (
							<RepositoriesListRow
								key={repository.id}
								userName={repository.owner.login}
								avatar={repository.owner.avatar_url}
								repositoryName={repository.name}
								description={repository.description}
								numberOfStars={repository.stargazers_count}
								numberOfIssues={repository.open_issues_count}
								timeInterval={getTimeIntervalInDay(creation_date, current_day)}
							/>
						)
					})
				}
			</List>
		</InfiniteScroll>
	);
}
