import Navbar from "./Components/Navbar/Nav";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
function App() {
  const title = "Web en mantenimiento. Vuelva más tarde."
  return (

    <>
      <Navbar />
      <ItemListContainer greeting={title} />
      <ItemDetailContainer />
    </>
  )
}

export default App;
