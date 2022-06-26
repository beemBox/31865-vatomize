import React from 'react'
import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById, ProductProps } from '../../asyncmock'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
  const [item, setItem] = useState<ProductProps>()
  const { id } = useParams()

  useEffect(() => {
    getProductById(Number(id))
      .then(item => setItem(item))
      .catch(err => console.log(err))
  }, [id])

  return (
    <ItemDetail title={item?.title} category={item?.category} {...item}>
    </ItemDetail>
  )
}

export default ItemDetailContainer