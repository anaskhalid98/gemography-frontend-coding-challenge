import {request} from "../../../config/axios-config";
import {GITHUB_API_URL} from "../../../constants";


export function getMostStarredRepositories(page) {
	return request({
		url: GITHUB_API_URL + `/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`,
		method: "get",
	});
}
