import { useState, useEffect }from 'react'
import Counter from '../Counter/Counter'
import Button from '../Button/Button'
import './Item.css'

const Item = (props) => {
  const [qty, setQty] = useState(0)
  const {
    id,
    title,
    price,
    pictureUrl,
    category
  } = props


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
          <Counter qty={0}/>
          <Button className="item-button">Check Details</Button>
        </div>
      </div>
    </div>
  )
}

export default Item