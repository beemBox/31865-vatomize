import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'


export default function CartWidget({className}) {

  return <>
        <Icon className={className} icon={faShoppingCart} />
        <hr />
  </>
}