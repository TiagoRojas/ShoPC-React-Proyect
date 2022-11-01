import {Link} from 'react-router-dom';

const RandomProductItem = ({product}) => {
	return (
		<>
			<Link to={`/product/${product.id}`}>
				<div id="product-item">
					<img src={product.image} alt={product.title} id={'product'} />
					<h3 key={product.id} id={'product-name'}>
						{product.title}
					</h3>
					<p>${product.price}</p>
				</div>
			</Link>
		</>
	);
};

export {RandomProductItem};
