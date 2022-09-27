import {Item} from "../item/item";
const ItemList = ({product}) => {
	return (
		<div id="item-container">
			{product.map((product) => (
				<Item key={product.id} product={product} />
			))}
		</div>
	);
};

export default ItemList;
