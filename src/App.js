import Navbar from "./Components/Navbar/Nav";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  const title = "Web en mantenimiento. Vuelva más tarde."
  return (

    <>
      <Navbar />
      <ItemListContainer greeting={title} />
    </>
  )
}

export default App;
