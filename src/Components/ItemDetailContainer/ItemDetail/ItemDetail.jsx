export const ItemDetail = ({product}) => {
	return (
		<>
			<h2>Product Detail</h2>
			<div style={Styles.productContainer}>
				<img src={product.image} alt={product.title} style={Styles.image} />
				<div style={Styles.infoContainer}>
					<h3>{product.title}</h3>
					<span>{product.description}</span>
				</div>
			</div>
		</>
	);
};

const Styles = {
	productContainer: {
		borderRadius: "15px",
		backgroundColor: "#Fff6f4",
		width: "50%",
		display: "flex",
	},
	image: {
		padding: "10px",
		height: "20%",
		width: "20%",
	},
	infoContainer: {
		flexDirection: "row",
	},
};
