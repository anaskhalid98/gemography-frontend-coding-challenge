import {request} from "../../../config/axios-config";
import {GITHUB_API_URL} from "../../../constants";
import {getCurrentDateSubtractDays, getFormattedDate} from "../../utils";


export function getMostStarredRepositories(page) {
	let created_date = getFormattedDate(getCurrentDateSubtractDays(30)).toString();

	return request({
		url: GITHUB_API_URL + `/search/repositories?q=created:>${created_date}&sort=stars&order=desc&page=${page}`,
		method: "get",
	});
}
