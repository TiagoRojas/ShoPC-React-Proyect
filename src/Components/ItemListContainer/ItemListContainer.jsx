import { useEffect, useState } from "react";
import ItemCount from "../ItemCount"
import backProducts from "../products";

const promise = new Promise((res, rej)=>{
    res(backProducts)
})
const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    let timeout = undefined
    const callProducts = () => {
        promise
        .then((data)=>{
            setProducts(data)
            console.log("productos cargados!")
        })
    }    
    useEffect(() => {
        clearTimeout(timeout)
        timeout = setTimeout(callProducts, 2000);
    });
    
    
    const addCart = (count) => {
        console.log(`Se agregan ${count} productos`);
    }
    return (
    <>
        <a/>
        <h1 style={Styles.h1}>{greeting}</h1>
        <ItemCount initial={1} stock={10} addCart={addCart}/>
        <div id="item-container">
            {products.map((product, indice) => 
            <div key={product.keydiv} id="product-item">
                <img src={product.img} alt={product.name} id={"product"+indice}/>
                <h3 key={product.id} id={"product-name"+indice}>{product.name}</h3>
            </div>)}
        </div>
    </>
    )
}

export default ItemListContainer

const Styles = {
    h1:{
        textAlign: "center",
        fontSize: 20
    }
}