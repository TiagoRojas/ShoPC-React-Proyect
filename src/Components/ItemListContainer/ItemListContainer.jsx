import {useEffect, useState} from "react";
import ItemList from "./itemList/itemList";
import {useParams} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import {db} from "../../Firebase/Firebase";
import {getDocs, collection, query, where} from "firebase/firestore";

const ItemListContainer = ({greeting}) => {
	const {id} = useParams();
	const [products, setProducts] = useState([]);
	const [Loading, setLoading] = useState(true);

	useEffect(() => {
		const productsCollection = collection(db, "products");

		const category = id
			? query(productsCollection, where("category", "==", id))
			: productsCollection;

		const getProducts = async () => {
			try {
				const data = await getDocs(category);
				const productList = data.docs.map((product) => {
					return {
						...product.data(),
						id: product.id,
					};
				});
				setProducts(productList);
			} catch {
				console.log("error");
			} finally {
				setLoading(false);
			}
		};
		getProducts();
	}, [id]);

	return (
		<>
			<h1 style={Styles.h1}>{greeting}</h1>
			{Loading ? (
				<CircularProgress id="loading-icon" />
			) : (
				<ItemList product={products} />
			)}
		</>
	);
};

export default ItemListContainer;

const Styles = {
	h1: {
		textAlign: "center",
		fontSize: 20,
	},
};
