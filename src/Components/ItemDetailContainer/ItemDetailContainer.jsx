import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ItemDetail} from "./ItemDetail/ItemDetail";
import {CircularProgress} from "@mui/material";
import {db} from "../../Firebase/Firebase";
import {doc, getDoc, collection} from "firebase/firestore";
const ItemDetailContainer = () => {
	const [productLoaded, setProduct] = useState({});
	const [Loading, setLoading] = useState(true);
	const {id} = useParams();
	useEffect(() => {
		const productsCollection = collection(db, "products");
		const productDoc = doc(productsCollection, id);
		getDoc(productDoc)
			.then((product) => {
				setProduct({
					id: product.id,
					...product.data(),
				});
			})
			.finally(() => {
				setLoading(false);
			});
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
