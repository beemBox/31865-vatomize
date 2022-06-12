import { useState, useEffect } from 'react'
import Counter from '../Counter/Counter'
import Button from '../Button/Button'
import './ItemDetail.css'

const ItemDetail = (props) => {
  const [qty, setQty] = useState(0)
  const {
    id,
    title,
    price,
    description,
    pictureUrl,
    category
  } = props

  
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
            <Counter qty={0} />
            <h2 className="item-detail__content-price">{price}</h2>
            <Button className="item-button">Add to Cart</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItemDetail