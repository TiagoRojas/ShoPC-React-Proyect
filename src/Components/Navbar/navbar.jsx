import CartWidget from "../Cartwidget/CartIcon";
import {Nav} from "./nav/Nav";
import {Link} from "react-router-dom";

const Navbar = () => {
	const categories = [
		{id: 0, title: "Motherboards", route: "/category/motherboards"},
		{id: 1, title: "Procesadores", route: "/category/procesadores"},
		{id: 2, title: "Almacenamiento", route: "/category/almacenamiento"},
		{id: 3, title: "Placas de Video", route: "/category/placas de video"},
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
