import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TrendingRepositoriesPage from "./components/pages/trending-repositories";
export default function Routes(props) {

	return (
			<Router>
				<Switch>
					<Route exact path="/*" component={TrendingRepositoriesPage}></Route>
				</Switch>
			</Router>
	);
}


