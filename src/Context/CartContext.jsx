import {createContext, useState} from 'react';

export const Context = createContext();

const CartProvider = ({children}) => {
	const [cart, setCart] = useState([]);
	const addItem = (product, quantity) => {
		const alreadyAdded = cart.findIndex((itemCart) => itemCart.product.id === product.id);
		if (alreadyAdded !== -1) {
			const newCart = cart.filter((product) => product !== cart[alreadyAdded]);
			setCart([...newCart, {product, quantity: quantity + quantity}]);
		} else {
			setCart([...cart, {product, quantity}]);
		}
	};
	const removeItem = (product) => {
		const newCart = cart.filter((oldProduct) => oldProduct.product !== product);
		setCart([...newCart]);
	};
	const removeAll = () => {
		setCart([]);
	};
	const reset = () => {
		setCart([]);
	};
	const totalPrice = () => {
		return cart.reduce((acc, product) => (acc += product.product.price * product.quantity), 0);
	};

	return <Context.Provider value={{cart, addItem, removeItem, removeAll, reset, totalPrice}}>{children}</Context.Provider>;
};
export default CartProvider;
