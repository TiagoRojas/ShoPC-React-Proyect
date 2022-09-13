import { useState } from "react"

const ItemCount = ({initial, stock, addCart }) => {
    const [count, setCount] = useState(initial)

    const addOne = () => {
        if(count < stock)setCount(count + 1);
    }
    const subOne = () => {
        if(count > initial)setCount(count - 1);
    }
    return(
        <>
            <div className="amountContainer">
                <button onClick={subOne} className="amountButton">-</button>
                <div className="amount">{count}</div>
                <button onClick={addOne} className="amountButton">+</button>
                <button onClick={() => addCart(count)} className="submitButton">Añadir al carrito</button>
            </div>
        </>
    )
}

export default ItemCount