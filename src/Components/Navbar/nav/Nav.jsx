import {NavLink} from "react-router-dom";

export const Nav = ({categories}) => {
	return (
		<nav>
			{categories.map((category) => {
				return (
					<NavLink key={category.id} to={category.route} style={styles.links}>
						{category.title}
					</NavLink>
				);
			})}
		</nav>
	);
};
const styles = {
	links: {
		fontWeight: "bold",
		textDecoration: "none",
		color: "#fff",
		padding: "10px",
		margin: 10,
		textTransform: "capitalize",
		backgroundColor: "rgb(99, 169, 255)",
		borderRadius: "10px",
		border: "1px solid",
	},
};
