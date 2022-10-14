import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {Context} from "../../Context/CartContext";
import {BuyForm} from "./buyForm";

export const Cart = () => {
	const {cart, removeItem, removeAll} = useContext(Context);
	const [isBuyFinishing, setIsBuyFinishing] = useState(false);
	const firstFinishBuy = () => setIsBuyFinishing(true);

	return (
		<>
			<h2 id="cartTitle">CART</h2>
			{cart.length !== 0 ? (
				<>
					{isBuyFinishing ? <BuyForm /> : null}
					{cart.map((p) => (
						<div key={p.product.id}>
							<p>{p.quantity}</p>
							{/* <img src={p.item.image} alt="" /> */}
							<p>{p.product.title}</p>
							<button onClick={() => removeItem(p.product)}>Quitar</button>
							<button onClick={() => removeAll()}>Vaciar Carrito</button>
						</div>
					))}
					<div>
						<button onClick={firstFinishBuy}>Finalizar Compra</button>
					</div>
				</>
			) : (
				<div>
					<p>Carrito Vacio</p>
					<Link to={"/"}>Click aqui para ir al inicio</Link>
				</div>
			)}
		</>
	);
};
