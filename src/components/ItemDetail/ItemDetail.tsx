import React, { useState, useEffect, useContext } from 'react'
import Counter from '../Counter/Counter'
import Button from '../Button/Button'
import CartContext from '../../context/CartContext'
import './ItemDetail.css'
import { ICartItem, ICartContext } from '../../interfaces/interfaces'
import { Link } from 'react-router-dom'

const ItemDetail = ({ category = 'Juice', ...props }) => {
  const [qty, setQty] = useState(0)
  const [isAdded, setIsAdded] = useState(false)
  const { addItem } = useContext<ICartContext>(CartContext)
  const {
    id,
    title, 
    price,
    description,
    pictureUrl
  } = props

  useEffect(() => {
    console.log('cambio ', qty)
  }, [qty])

  const addHandler = () => {
    addItem({ id, title, price, qty, description, pictureUrl } as ICartItem)
    setIsAdded(true)
  }

  
  return(
    <section className="section">
      <h2 className='section__heading'>{title}</h2>
      <div className="item-detail">
        <div className='item-detail__image'>
          {/* @ts-ignore */}
          <div className='item-detail__image-galery' aftercontent={category}>
            <img src={pictureUrl} alt={title} />
          </div>
        </div>
        <div className='item-detail__content'>
          <div className='item-detail__content-upper'>
            <h3 className="item-detail__content-heading">Product Description</h3>
            <p>{description}</p>
          </div>
          <div className='item-detail__content-lower'>
            <Counter qty={qty} handleQty={setQty} />
            <h2 className="item-detail__content-price">${price}</h2>
            { isAdded
              ? <Link to='/cart'>Checkout</Link>
              : <Button onClick={addHandler} className="item-button">Add to Cart</Button>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItemDetail