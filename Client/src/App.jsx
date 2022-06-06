import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
      <Navbar />
      
      <ProductList/>
    </div>
  )
}

export default App
