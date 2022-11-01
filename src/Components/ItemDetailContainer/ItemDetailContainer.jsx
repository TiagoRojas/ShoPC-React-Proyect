import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {ItemDetail} from './ItemDetail/ItemDetail';
import {CircularProgress} from '@mui/material';
import {doc, getDoc, getDocs, collection} from 'firebase/firestore';
const ItemDetailContainer = ({collectionURL}) => {
	const [productLoaded, setProduct] = useState({});
	const [productInfo, setProductInfo] = useState({});
	const [Loading, setLoading] = useState(true);
	const {id} = useParams();
	useEffect(() => {
		const productDoc = doc(collectionURL, id);
		const subProductCollection = collection(productDoc, 'info');
		getDocs(subProductCollection).then((data) => {
			const productInfoData = data.docs.map((product) => {
				return product.data();
			});
			setProductInfo(...productInfoData);
		});
		getDoc(productDoc)
			.then((product) => {
				setProduct({
					id: product.id,
					...product.data()
				});
			})
			.finally(() => {
				setLoading(false);
			});
	}, [collectionURL, id]);
	return <>{Loading ? <CircularProgress id="loading-icon" /> : <ItemDetail producto={productLoaded} info={productInfo} />}</>;
};

export default ItemDetailContainer;
