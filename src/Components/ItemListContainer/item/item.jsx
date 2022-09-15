const Item = ({product}) => {
    return(
        <>
        <div key={product.keydiv} id="product-item">
            <img src={product.img} alt={product.name} id={"product"}/>
            <h3 key={product.id} id={"product-name"}>{product.name}</h3>
        </div>
        </>
    )
}

export {Item}