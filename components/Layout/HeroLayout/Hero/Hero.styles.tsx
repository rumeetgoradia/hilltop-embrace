import { makeStyles } from "@material-ui/core/styles"

const useHeroStyles = makeStyles((theme) => ({
	root: {
		height: "30vh",
		backgroundColor: theme.palette.primary.main,
	},
	container: {
		position: "relative",
		height: "100%",
	},
	title: {
		color: theme.palette.common.white,
		fontWeight: 300,
		position: "absolute",
		bottom: 0,
	},
}))

export default useHeroStyles