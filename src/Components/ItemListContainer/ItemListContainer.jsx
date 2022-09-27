import {useEffect, useState} from "react";
import ItemList from "./itemList/itemList";
import {useParams} from "react-router-dom";
import {API} from "../../API/api";

const ItemListContainer = ({greeting}) => {
	const {id} = useParams();
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const url = id ? `${API.category}${id}` : API.list;
		const getItems = async () => {
			try {
				const respuesta = await fetch(url);
				const data = await respuesta.json();
				setProducts(data);
			} catch (err) {
				console.error(err);
			}
		};
		getItems();
	}, [id]);
	return (
		<>
			<h1 style={Styles.h1}>{greeting}</h1>
			<ItemList product={products} />
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
