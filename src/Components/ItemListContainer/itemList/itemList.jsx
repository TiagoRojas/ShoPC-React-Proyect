import { Item } from "../item/item"
const ItemList = ({product})=>{
    return(
        <>
        <div id="item-container">
            {product.map( (product, indice) => <Item key={`${product.id}-${indice}`}product={product}/>)}
        </div>
        </>
        
    )
}


export default ItemList