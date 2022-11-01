import {useContext, useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import ItemCount from '../../ItemCount';
import {Context} from '../../../Context/CartContext';
import {InfoDetails} from './ItemInfo/itemInfo';
import {ProductSlider} from './ProductSlider/productSlider';
import {collection, getDocs, doc} from 'firebase/firestore';
import {db} from '../../../Firebase/Firebase';
export const ItemDetail = ({producto, info}) => {
	const {addItem} = useContext(Context);
	const [productImage, setProductImage] = useState();

	const addCart = (count) => {
		addItem(producto, count);
	};
	const {id} = useParams();
	useEffect(() => {
		const productCollection = collection(db, 'products');
		const productDoc = doc(productCollection, id);
		const imageCollection = collection(productDoc, 'images');
		getDocs(imageCollection).then((data) => {
			const imageData = data.docs.map((product) => {
				return product.data();
			});
			setProductImage([...imageData]);
		});
	}, [id]);
	return (
		<div id="productDetail">
			<div id="productContainer">
				<div id="productImageContainer">{productImage === undefined ? null : <ProductSlider images={productImage} />}</div>
				<div id="productInfoContainer">
					<Link to={'/products/all'} id="backToProducts">
						Regresar
					</Link>
					<h3>{producto.title}</h3>
					<span id="SKU">SKU: {producto.SKU}</span>
					<h4>
						Precio especial: <span>${producto.price}</span>
					</h4>
					<ItemCount initial={1} stock={producto.stock} addCart={addCart} />
				</div>
			</div>
			<span id="advanceInfo">ESPECIFICACIONES</span>
			<InfoDetails info={info} />
		</div>
	);
};
