import {useContext, useEffect, useState} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Context} from '../../Context/CartContext';

const CartWidget = () => {
	const {cart} = useContext(Context);

	const [itemsInCart, setItemsInCart] = useState(0);

	useEffect(() => {
		if (cart.length) {
			let totalAmount = 0;
			cart.forEach((item) => (totalAmount += item.quantity));
			setItemsInCart(totalAmount);
		}
	}, [cart]);

	return (
		<div>
			{cart.length ? <span id="itemsInCart">{itemsInCart}</span> : null}
			<ShoppingCartIcon fontSize="large" id="cartIcon" />
		</div>
	);
};

export default CartWidget;
