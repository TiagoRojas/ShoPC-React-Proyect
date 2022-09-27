import Navbar from "./Components/Navbar/navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./Components/Cart/Cart";


function App() {
  const title = "Web en mantenimiento. Vuelva más tarde."
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={title} />} />
          <Route path="/category/:id" element={<ItemListContainer greeting={title} />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
