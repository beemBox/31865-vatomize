import { useState, useEffect, createContext } from 'react'
import { Props, ICartItem, ICartContext } from '../interfaces/interfaces'

const CartContext = createContext<ICartContext>({} as ICartContext)

export const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<ICartItem[]>([])
  const [qty, setQty] = useState(0)

  useEffect(() => {
    let total = 0
    cart.reduce((acc, item) => {
      return acc + item.qty
    }, 0)
    setQty(total)
  }, [cart])

  const isAdded = (id: number) => cart.some(item => item.id === id)
  
  const addItem = (newItem: ICartItem) => {
    !isAdded(newItem.id) && setCart([...cart, newItem])
    console.log(cart)
  }
  
  const removeItem = (id: number) => setCart(cart.filter(item => item.id !== id))
  
  const clearCart = () => setCart([])

  return <CartContext.Provider value={{
    cart,
    qty,
    isAdded,
    addItem,
    removeItem,
    clearCart
  }}>
    { children}
  </CartContext.Provider>
}

export default CartContext