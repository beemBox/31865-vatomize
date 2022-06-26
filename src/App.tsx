import './App.css';
import Header from './components/Header/Header'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './container/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { CartProvider } from './context/CartContext';
import { ProductProps } from './asyncmock'

export type CartState = [
  cart: any[],
  item: ProductProps,
]

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
