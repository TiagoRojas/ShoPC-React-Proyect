import CartWidget from "../Cartwidget/CartIcon";
import {Nav} from "./nav/Nav";
import {Link} from "react-router-dom";
const Navbar = () => {
	const categories = [
		{id: 0, title: "electronics", route: "/category/electronics"},
		{id: 1, title: "jewelery", route: "/category/jewelery"},
		{id: 2, title: "men's clothing", route: "/category/men's clothing"},
		{id: 3, title: "women's clothing", route: "/category/women's clothing"},
	];
	return (
		<header style={styles.header}>
			<Link to="/" style={styles.logo}>
				ShoPC
			</Link>
			<Nav categories={categories} />
			<Link to="/cart">
				<CartWidget />
			</Link>
		</header>
	);
};
const styles = {
	header: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "rgb(52, 116, 235)",
	},
	logo: {
		padding: 15,
		margin: 10,
		backgroundColor: "rgb(111, 161, 252)",
		borderRadius: 10,
		textDecoration: "none",
		fontSize: "40px",
		fontWeight: "bold",
		color: "#ffffff",
	},
};
export default Navbar;
