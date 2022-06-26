import { useContext } from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../context/CartContext'
import './CartWidget.css'


export default function CartWidget({ className }: {className: string}) {
  const { qty } = useContext(CartContext)
  return <>
        <Icon className={className} icon={faShoppingCart} />
        { qty }
        <hr />
    </>
}