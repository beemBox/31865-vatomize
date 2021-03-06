import React, {useState, useEffect} from 'react'
import ItemList from '../../components/ItemList/ItemList'
import Item from '../../components/Item/Item'
import { getProducts } from '../../asyncmock'
import './ItemListContainer.css'

//* Creo el type para las props de product.
type ProductProps = {
  id: number,
  title: string,
  price: number,
  description: string,
  pictureUrl: string,
  category: string
}

const ItemListContainer = ({heading, category}) => {
  const [items, setItems] = useState<ProductProps[]>([])

  //* buscamos los datos en products representando lo que implmentaría en firebase.
  useEffect(() => {
    getProducts()
    .then(items => {
      //* filtro por category
      setItems(items.products.filter(
        item => item.category.toLowerCase() === category.toLowerCase()
      ))
    })
    .catch(err => {
      console.log(err)
    })
  }, [category])
  return (
      <ItemList title={heading}>
        {console.log(items)}
        {items.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ItemList>
  )
}

export default ItemListContainer