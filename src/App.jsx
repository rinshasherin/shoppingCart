import { useState } from 'react'
import './App.css'
import ProductList from './ProductList'
import Cart from './Cart'

function App() {

  return (
    <>
      <div className='border shadow rounded mt-5 p-3' style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <h1>Shopping Cart App</h1>
        <ProductList />
        <Cart />
      </div>
    </>
  )
}

export default App
