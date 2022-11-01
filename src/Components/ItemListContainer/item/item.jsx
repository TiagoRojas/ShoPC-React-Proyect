import {Link} from 'react-router-dom';

const Item = ({product}) => {
	return (
		<>
			<div id="product-item">
				<img src={product.image} alt={product.title} id={'product'} />
				<h3 key={product.id} id={'product-name'}>
					{product.title}
				</h3>
				<p>${product.price}</p>
				<Link to={`/product/${product.id}`}>
					<button>Ver Detalles</button>
				</Link>
			</div>
		</>
	);
};

export {Item};
