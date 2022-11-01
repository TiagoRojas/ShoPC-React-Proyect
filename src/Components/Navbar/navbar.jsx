import CartWidget from '../Cartwidget/CartIcon';
import {Link} from 'react-router-dom';
const Navbar = () => {
	return (
		<header className="header">
			<Link to="/" className="logo">
				ShoPC
			</Link>
			<Link to={'/products/all'}>Productos</Link>
			<Link to="/cart">
				<CartWidget />
			</Link>
		</header>
	);
};
export default Navbar;
