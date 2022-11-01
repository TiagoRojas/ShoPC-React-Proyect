import {useEffect, useState, useContext} from 'react';
import {getDocs, query, where, collection} from 'firebase/firestore';
import {db} from '../../Firebase/Firebase';
import {useParams} from 'react-router-dom';
import {CircularProgress} from '@mui/material';
import ItemList from './itemList/itemList';
import {Categories} from '../Categories/category';
import {DropDown} from './accesories';
import {Context} from '../../Context/Context';

const ItemListContainer = ({collectionURL}) => {
	const {id} = useParams();
	const [products, setProducts] = useState([]);
	const [Loading, setLoading] = useState(true);
	const {data} = useContext(Context);
	const productCollection = collection(db, 'products');
	useEffect(() => {
		const category = id ? query(productCollection, where('category', '==', id)) : productCollection;
		const getProducts = async () => {
			try {
				const data = await getDocs(category);
				const productList = data.docs.map((product) => {
					return {
						...product.data(),
						id: product.id
					};
				});
				setProducts(productList);
				setLoading(false);
			} catch {
				setLoading(true);
			}
		};
		getProducts();
	}, [id, productCollection]);

	return (
		<>
			<div id="main">
				{Loading ? (
					<CircularProgress id="loading-icon" />
				) : (
					<>
						<DropDown categoryList={data} />
						<ItemList product={products} />
						<Categories />
					</>
				)}
			</div>
		</>
	);
};

export default ItemListContainer;
