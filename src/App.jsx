
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import DetailsPage from './Pages/DetailsPage'
import Contact from './Pages/Contact'
import ProductDescription from './Pages/ProductDescription'
import Cart from './Pages/Cart'
import Shipping from './Pages/Shipping'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/details' element={<DetailsPage />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/product' element={<ProductDescription />}> </Route>
        <Route path='/cart' element={<Cart />}> </Route>
        <Route path='/shipping' element={<Shipping />}> </Route>
      </Routes>

    </div>
  )
}

export default App
