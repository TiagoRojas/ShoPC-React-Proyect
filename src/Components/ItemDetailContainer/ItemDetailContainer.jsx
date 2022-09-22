import {useEffect, useState} from "react";
import {ItemDetail} from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
	const [productLoaded, setProduct] = useState({});
	useEffect(() => {
		const getItem = async () => {
			try {
				const resp = await fetch("https://fakestoreapi.com/products/1");
				const data = await resp.json();
				setProduct(data);
			} catch (error) {
				console.error(error);
			} finally {
			}
		};
		getItem();
	}, []);
	return (
		<>
			<ItemDetail product={productLoaded} />
		</>
	);
};

export default ItemDetailContainer;
