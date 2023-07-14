
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
     
    </div>
  )
}

export default App
