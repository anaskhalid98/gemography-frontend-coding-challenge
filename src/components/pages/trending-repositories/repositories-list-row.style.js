import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	listItem:{
		margin:10
	},
	inline:{
		display:"inline"
	},
	avatar:{
		minHeight:"100%",
		minWidth:"100%"
	},
	gridContainer:{
		display:"flex",
		minHeight:170,
		margin:10,
	},
	otherDetailsContainer:{
		height:"25%",
	},
	description:{
		height:"50%",
		marginTop:3
	},
	otherDetails:{
		display:"flex",
		alignItems:"center",
	},
	starIcon:{
		color:"#D4AF37"
	},
	bugReportIcon:{
		color:"red"
	},
	repositoryName:{
		height:"25%"
	}

}));

export default useStyles;
