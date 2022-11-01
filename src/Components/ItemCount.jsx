import {useState} from 'react';
import {Link} from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveIcon from '@mui/icons-material/Remove';
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
				<RemoveIcon onClick={subOne} id="amountButton" />
				<div className="amount">{count}</div>
				<AddCircleIcon onClick={addOne} className="amountButton" />
				<button onClick={addCartButton} id="submitButton">
					Añadir al carrito
				</button>
			</div>
		</>
	) : (
		<Link to={'/cart'}>
			<button id="goToCart">Finalizar compra</button>
		</Link>
	);
};

export default ItemCount;
