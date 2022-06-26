import { ReactPortal } from 'react'

export interface Props {
  children: JSX.Element | JSX.Element[]
}

export interface IItem {
  id: number,
  title: string,
  price: number,
  description: string,
  pictureUrl: string,
  category: string
}

export interface IItemList {
  title: string,
  children: any
}

export interface ICartItem extends IItem {
  qty: number
}

export interface ICartContext {
  cart: ICartItem[],
  qty: number,
  isAdded: (id: number) => boolean,
  addItem: (newItem: ICartItem) => void,
  removeItem: (id: number) => void,
  clearCart: () => void
}