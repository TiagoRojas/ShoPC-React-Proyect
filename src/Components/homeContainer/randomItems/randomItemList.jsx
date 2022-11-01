import {RandomProductItem} from './randomItem/randomItem';
const RandomItemList = ({products}) => {
	return (
		<div id="homeItemContainer">
			{products.map((product) => (
				<RandomProductItem key={product.id} product={product} />
			))}
		</div>
	);
};

export default RandomItemList;
