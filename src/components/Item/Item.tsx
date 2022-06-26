import './Item.css'
import { useState, useContext }from 'react'
import Counter from '../Counter/Counter'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import { ICartItem, IItem } from '../../interfaces/interfaces'

const Item = (props: IItem) => {
  const {
    id,
    title,
    price,
    pictureUrl,
    category
  } = props
  const [qty, setQty] = useState(0)
  const { addItem } = useContext(CartContext)

  const addHandler = () => {
    addItem({ id, title, price, qty } as ICartItem)
  }

  return (
    //@ts-ignore
    <div className="item" aftercontent={category}>
      <div className="item__image">
        <img src={pictureUrl} alt={title} />
      </div>
      <div className="item__content">
        <h3 className="item__content-title">{title}</h3>
        <h2 className="item__content-price">${price}</h2>
        <div className="item__content-wrapper">
          <Counter qty={0} handleQty={ setQty } />
          <Link to={`/detail/${id}`}>
            {/* @ts-ignore */}
            <Button className="item-button" onClick={ addHandler }>Check Details</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Item