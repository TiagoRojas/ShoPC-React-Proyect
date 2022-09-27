import ItemCount from "../../ItemCount";
export const ItemDetail = ({product}) => {
	const addCart = (count) => {
		console.log(`Se agregan ${count} productos`);
	};
	return (
		<>
			<h2>Product Detail</h2>
			<div style={Styles.productContainer}>
				<img src={product.image} alt={product.title} style={Styles.image} />
				<div style={Styles.infoContainer}>
					<h3>{product.title}</h3>
					<span>{product.description}</span>
					<h4>${product.price * 120}</h4>
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
