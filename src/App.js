import Navbar from "./Components/Navbar/navbar";
import HomeContainer from "./Components/homeContainer/homeContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./Components/Cart/Cart";
import CartProvider from "./Context/CartContext";
import GeneralProvider from "./Context/Context";
import { db } from "./Firebase/Firebase";
import { collection } from "firebase/firestore";


function App() {
  const productCollection = collection(db, 'products');
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <GeneralProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomeContainer collectionURL={productCollection} />} />
              <Route path="/products/all" element={<ItemListContainer />} />
              <Route path="/products/:id" element={<ItemListContainer />} />
              <Route path='/product/:id' element={<ItemDetailContainer collectionURL={productCollection} />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </GeneralProvider>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
