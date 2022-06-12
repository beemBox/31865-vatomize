import React from 'react'
import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById, ProductProps } from '../../asyncmock'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

type ItemDetailProps = {
  id: number,
}

const ItemDetailContainer = () => {
  const [item, setItem] = useState<ProductProps>()
  const { id } = useParams()

  //* Busco el producto por id
  useEffect(() => {
    getProductById(Number(id))
      .then(item => setItem(item))
      .catch(err => console.log(err))
  }, [item])

  return (
    <ItemDetail title={item?.title} {...item}>
      
    </ItemDetail>
  )
}

export default ItemDetailContainer