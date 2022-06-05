import React, { useState, useEffect } from 'react'
import './Counter.css'

const Counter = ({qty}) => {
  const [count, setCount] = useState(qty)

  useEffect(() => {
    qty = count
  }, [count])

  return (
    <div className="item-counter">
      <button
        className="item-counter__button-minus"
        onClick={() => count > 0 ? setCount(count - 1) : count}>-</button>
      <input type="text" className="item-counter__input" value={count}/>
      <button className="item-counter__button-plus" onClick={() => setCount(count + 1)}>+</button> 
    </div>
  )
}

export default Counter