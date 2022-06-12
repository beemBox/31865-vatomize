import React from 'react'
import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById, ProductProps } from '../../asyncmock'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

type ItemDetailProps = {
  id: number,
}

const ItemDetailContainer = () => {
  const [item, setItem] = useState<ProductProps>()
  //* Busco el producto por id
  useEffect(() => {
    getProductById(1)
      .then(item => setItem(item))
      .catch(err => console.log(err))
  }, [item])

  return (
    <ItemDetail title={item?.title} {...item}>
      
    </ItemDetail>
  )
}

export default ItemDetailContainer