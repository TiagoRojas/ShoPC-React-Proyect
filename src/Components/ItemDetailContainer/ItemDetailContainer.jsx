import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ItemDetail} from "./ItemDetail/ItemDetail";
import {API} from "../../API/api";
const ItemDetailContainer = () => {
	const [productLoaded, setProduct] = useState({});
	const {id} = useParams();
	useEffect(() => {
		const url = `${API.product}${id}`;
		const getItem = async () => {
			try {
				const resp = await fetch(url);
				const data = await resp.json();
				setProduct(data);
				console.log(data);
			} catch (error) {
				console.error(error);
			} finally {
			}
		};
		getItem();
	});
	return (
		<>
			<ItemDetail product={productLoaded} />
		</>
	);
};

export default ItemDetailContainer;
