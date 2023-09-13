
import { NavBar } from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemDetailContainer } from './Components/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/home' element={<ItemListContainer />} />
        <Route exact path='/category/:categoryName' element={<ItemListContainer />} />
        <Route exact path='/item/:itemId' element={<ItemListContainer />} />
        <Route exact path='/item/:itemId' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;