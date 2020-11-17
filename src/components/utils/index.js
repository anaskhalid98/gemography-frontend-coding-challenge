export  const  getTimeIntervalInDay = (creationDate, currentDate) => {
	let difference_in_time = currentDate.getTime() - creationDate.getTime();
	let difference_in_day = Math.floor(difference_in_time / (1000 * 3600 * 24));
	return difference_in_day;
}
