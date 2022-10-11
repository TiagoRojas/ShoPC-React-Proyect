import {useState} from "react";
import {Link} from "react-router-dom";
const ItemCount = ({initial, stock, addCart}) => {
	const [count, setCount] = useState(initial);
	const [canAdd, setCanAdd] = useState(true);

	const addOne = () => {
		if (count < stock) setCount(count + 1);
	};

	const subOne = () => {
		if (count > initial) setCount(count - 1);
	};

	const addCartButton = () => {
		addCart(count);
		setCanAdd(false);
	};
	return canAdd ? (
		<>
			<div className="amountContainer">
				<button onClick={subOne} className="amountButton">
					-
				</button>
				<div className="amount">{count}</div>
				<button onClick={addOne} className="amountButton">
					+
				</button>
				<button onClick={addCartButton} className="submitButton">
					Añadir al carrito
				</button>
			</div>
		</>
	) : (
		<Link to={"/cart"}>
			<button>Finalizar compra</button>
		</Link>
	);
};

export default ItemCount;
