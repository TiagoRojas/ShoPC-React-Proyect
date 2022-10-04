import {useContext} from "react";
import {Link} from "react-router-dom";
import {Context} from "../../Context/CartContext";

export const Cart = () => {
	const {cart, removeItem, removeAll} = useContext(Context);

	console.log(cart);
	return (
		<>
			<h2>CART</h2>
			{cart.length !== 0 ? (
				cart.map((p) => (
					<div key={p.product.id}>
						<p>{p.quantity}</p>
						{/* <img src={p.item.image} alt="" /> */}
						<p>{p.product.title}</p>
						<button onClick={() => removeItem(p.product)}>Quitar</button>
						<button onClick={() => removeAll()}>Vaciar Carrito</button>
					</div>
				))
			) : (
				<div>
					<p>Carrito Vacio</p>
					<Link to={"/"}>Click aqui para ir al inicio</Link>
				</div>
			)}
		</>
	);
};
