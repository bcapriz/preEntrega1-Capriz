
import { NavBar } from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemDetailContainer } from './Components/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import  Cart from './Components/Cart';
import  Checkout from './Components/Checkout'


function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/home' element={<ItemListContainer />} />
        <Route exact path='/category/:categoryName' element={<ItemListContainer />} />
        <Route exact path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
   </CartContextProvider>
  );
}
export default App;