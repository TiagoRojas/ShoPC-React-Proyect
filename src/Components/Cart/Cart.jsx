import {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {Context} from '../../Context/CartContext';
import {BuyForm} from './buyForm';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const Cart = () => {
	const {cart, removeItem, removeAll, totalPrice} = useContext(Context);
	const [isBuyFinishing, setIsBuyFinishing] = useState(false);
	const firstFinishBuy = () => setIsBuyFinishing(true);
	return (
		<div className="cart">
			<h2 id="cartTitle">CART</h2>
			{cart.length !== 0 ? (
				<>
					<button onClick={() => removeAll()} id="deleteAll">
						<DeleteSweepIcon />
						Vaciar Carrito
					</button>
					{cart.map((p) => (
						<>
							<div key={p.product.id} id="cartProducts">
								<img src={p.product.image} alt={p.product.title} />
								<p>{p.product.title}</p>
								<p>
									Cantidad: <span>{p.quantity}</span>
								</p>
								<DeleteIcon onClick={() => removeItem(p.product)} fontSize="large" />
							</div>
						</>
					))}
					<div>
						<p id="totalPrice">Total a comprar:</p>
						<span id="priceNumber">${totalPrice()}</span>
					</div>
					<div id="finishBuyContainer">
						<button id="finishBuyButton" onClick={firstFinishBuy}>
							Finalizar Compra
						</button>
					</div>
					{isBuyFinishing ? <BuyForm /> : null}
				</>
			) : (
				<div>
					<p id="emptyCart">
						<AddShoppingCartIcon id="emptyCartIcon" />
						Carrito Vacio
					</p>
					<Link to={'/'} id="backToHome">
						Click aqui para ir al inicio.
					</Link>
				</div>
			)}
		</div>
	);
};
