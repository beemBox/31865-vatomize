import React, {useState, useEffect} from 'react'
import ItemList from '../../components/ItemList/ItemList'
import Item from '../../components/Item/Item'
import { getProducts } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

type ProductProps = {
  id: number,
  title: string,
  price: number,
  description: string,
  pictureUrl: string,
  category: string
}

const ItemListContainer = () => {
  const [items, setItems] = useState<ProductProps[]>([])
  let { category } = useParams()

  useEffect(() => {
    getProducts()
      .then(items => {
      if (category)
        setItems(items.products.filter(item =>
          item.category.toLowerCase() === category?.toLowerCase()
        ))
      else
        setItems(items.products)
    })
    .catch(err => console.log(err))
  }, [category])
  return (
    <ItemList title={category
      ? category
      : 'Nuevos Productos'}>
      {items.length > 0
        ? items.map(item => (
          <Item key={item.id} {...item} />
        ))
        : 'No se encontraron productos.'
      }
      </ItemList>
  )
}

export default ItemListContainer