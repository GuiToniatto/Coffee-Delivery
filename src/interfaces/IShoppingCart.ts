import { Dispatch } from 'react'
import { ICoffee } from './ICoffee'
import { IItemOrder } from './IItemOrder'

export interface IShoppingCart {
  coffees: ICoffee[]
  shoppingCartItems: IItemOrder[]
  setShoppingCartItems: Dispatch<Array<IItemOrder>>
}
