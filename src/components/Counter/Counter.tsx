import { useState, useEffect } from 'react'
import './Counter.css'

type CounterProps = {
  qty: number,
  handleQty: (qty: number) => void
}

const Counter = ({ qty, handleQty }: CounterProps) => {
  const [count, setCount] = useState(qty)

  useEffect(() => {
    handleQty(count)
  }, [count])

  return (
    <div className="item-counter">
      <button
        className="item-counter__button minus"
        onClick={() => count > 0 ? setCount(count - 1) : count}>-</button>
      <input type="text" className="item-counter__input" onChange={ () => qty = count}  value={qty}/>
      <button 
        className="item-counter__button plus"
        onClick={() => setCount(count + 1)}>+</button> 
    </div>
  )
}

export default Counter