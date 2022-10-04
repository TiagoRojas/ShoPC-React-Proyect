import {useContext} from "react";
import ItemCount from "../../ItemCount";
import {Context} from "../../../Context/CartContext";
export const ItemDetail = ({producto}) => {
	const {addItem} = useContext(Context);
	const addCart = (count) => {
		addItem(producto, count);
	};
	return (
		<>
			<h2>Product Detail</h2>
			<div style={Styles.productContainer}>
				<img src={producto.image} alt={producto.title} style={Styles.image} />
				<div style={Styles.infoContainer}>
					<h3>{producto.title}</h3>
					<span>{producto.description}</span>
					<h4>${producto.price * 120}</h4>
					<ItemCount initial={1} stock={10} addCart={addCart} />
				</div>
			</div>
		</>
	);
};

const Styles = {
	productContainer: {
		borderRadius: "15px",
		border: "5px solid #000000",
		display: "flex",
		margin: "40px",
	},
	image: {
		padding: "10px",
		height: "400px",
		width: "500px",
	},
	infoContainer: {
		flexDirection: "row",
	},
};
