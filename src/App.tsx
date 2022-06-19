// import logo from './logo.svg'; //! lo dejo para acordarme de la configuración del tsconfig.json con el component de svg
import './App.css';
import Header from './components/Header/Header'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './container/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, createContext } from 'react'
import { ProductProps } from './asyncmock' // esto después lo tengo que pasar a sus respectivos types

export const CartContext = createContext({})

export type CartState = [
  cart: any[],
  item: ProductProps,
]

function App() {
  //! para probar grabatar
  const user = {
    email: 'test@email.com'
  } 
  const [cart, setCart] = useState<Array<CartState>>([])

  const addItemToCart = (newItem) => {
    //@ts-ignore
    (!cart.some(prod => prod.id === newItem.id) && setCart([...cart, newItem]))
  }

  return (
    <div className="App">
      <CartContext.Provider value={{ cart, addItemToCart }}>
        <BrowserRouter>
          <Header user={user}/>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
