export const getTimeIntervalInDay = (creationDate, currentDate) => {
	let difference_in_time = currentDate.getTime() - creationDate.getTime();
	let difference_in_day = Math.floor(difference_in_time / (1000 * 3600 * 24));
	return difference_in_day;
}

export const getCurrentDateSubtractDays = (days) => {
	return new Date(new Date().setDate(new Date().getDate() - days));
}

export const getFormattedDate = (date) => {
	return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
}
