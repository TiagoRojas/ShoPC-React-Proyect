import ItemCount from "../ItemCount"

const ItemListContainer = ({greeting}) => {
    const addCart = (count) => {
        console.log(`Se agregan ${count} productos`);
      }
    return (
    <>
        <a/>
        <h1 style={Styles.h1}>{greeting}</h1>
        <ItemCount initial={1} stock={10} addCart={addCart}/>
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