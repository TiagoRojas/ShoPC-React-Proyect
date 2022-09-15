import { useEffect, useState } from "react";
import ItemCount from "../ItemCount"
import backProducts from "../products";
import ItemList from "./itemList/itemList";
const promise = new Promise((res, rej)=>{
    res(backProducts)
})
const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    let timeout = undefined 
    useEffect(() => {
        clearTimeout(timeout)
        timeout = setTimeout(() =>{
            promise
            .then(data=>{
                setProducts(data)
                console.log("productos cargados!")
            })
        }, 2000);
    }, []);


    
    const addCart = (count) => {
        console.log(`Se agregan ${count} productos`);
    }
    return (
    <>
        <a/>
        <h1 style={Styles.h1}>{greeting}</h1>
        <ItemCount initial={1} stock={10} addCart={addCart}/>
        <ItemList product={products}/>
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