import {useEffect, useState} from "react";
import ItemList from "./itemList/itemList";
import {useParams} from "react-router-dom";
import {API} from "../../API/api";
import {CircularProgress} from "@mui/material";

const ItemListContainer = ({greeting}) => {
	const {id} = useParams();
	const [products, setProducts] = useState([]);
	const [Loading, setLoading] = useState(true);
	useEffect(() => {
		const url = id ? `${API.category}${id}` : API.list;
		const getItems = async () => {
			try {
				const respuesta = await fetch(url);
				const data = await respuesta.json();
				setProducts(data);
			} catch (err) {
				console.error(err);
			} finally {
				setLoading(false);
			}
		};
		getItems();
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
