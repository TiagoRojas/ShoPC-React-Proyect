import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ItemDetail} from "./ItemDetail/ItemDetail";
import {API} from "../../API/api";
import {CircularProgress} from "@mui/material";
const ItemDetailContainer = () => {
	const [productLoaded, setProduct] = useState({});
	const [Loading, setLoading] = useState(true);
	const {id} = useParams();
	useEffect(() => {
		const url = `${API.product}${id}`;
		const getItem = async () => {
			try {
				const resp = await fetch(url);
				const data = await resp.json();
				setProduct(data);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};
		getItem();
	});
	return (
		<>
			{Loading ? (
				<CircularProgress id="loading-icon" />
			) : (
				<ItemDetail producto={productLoaded} />
			)}
		</>
	);
};

export default ItemDetailContainer;
