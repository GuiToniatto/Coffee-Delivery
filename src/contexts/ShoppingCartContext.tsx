import { createContext, useState } from 'react'

import { ICoffee, TagType } from '../interfaces/ICoffee'

import { IShoppingCart } from '../interfaces/IShoppingCart'
import { IShoppingCartContextProviderProps } from '../interfaces/IShoppingCartContextProviderProps'

import americanoImg from '../assets/americano.svg'
import arabeImg from '../assets/arabe.svg'
import cafeLeiteImg from '../assets/cafe-com-leite.svg'
import capuccinoImg from '../assets/capuccino.svg'
import chocolateQuenteImg from '../assets/chocolate-quente.svg'
import cubanoImg from '../assets/cubano.svg'
import expressoImg from '../assets/expresso.svg'
import expressoCremosoImg from '../assets/expresso-cremoso.svg'
import expressoGeladoImg from '../assets/cafe-gelado.svg'
import havaianoImg from '../assets/havaiano.svg'
import irlandesImg from '../assets/irlandes.svg'
import latteImg from '../assets/latte.svg'
import macchiatoImg from '../assets/macchiato.svg'
import mochaccinoImg from '../assets/mochaccino.svg'
import { IItemOrder } from '../interfaces/IItemOrder'

export const ShoppingCartContext = createContext({} as IShoppingCart)

export function ShoppingCartContextProvider({
  children,
}: IShoppingCartContextProviderProps) {
  const coffees: ICoffee[] = [
    {
      id: 1,
      name: 'Expresso Tradicional',
      image: expressoImg,
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      tags: [TagType.TRADICIONAL],
    },
    {
      id: 2,
      name: 'Expresso Americano',
      image: americanoImg,
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      tags: [TagType.TRADICIONAL],
    },
    {
      id: 3,
      name: 'Expresso Cremoso',
      image: expressoCremosoImg,
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
      tags: [TagType.TRADICIONAL],
    },
    {
      id: 4,
      name: 'Expresso Gelado',
      image: expressoGeladoImg,
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      tags: [TagType.TRADICIONAL, TagType.GELADO],
    },
    {
      id: 5,
      name: 'Café com Leite',
      image: cafeLeiteImg,
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      tags: [TagType.TRADICIONAL, TagType.COMLEITE],
    },
    {
      id: 6,
      name: 'Latte',
      image: latteImg,
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      tags: [TagType.TRADICIONAL, TagType.COMLEITE],
    },
    {
      id: 7,
      name: 'Capuccino',
      image: capuccinoImg,
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
      tags: [TagType.TRADICIONAL, TagType.COMLEITE],
    },
    {
      id: 8,
      name: 'Macchiato',
      image: macchiatoImg,
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
      tags: [TagType.TRADICIONAL, TagType.COMLEITE],
    },
    {
      id: 9,
      name: 'Mochaccino',
      image: mochaccinoImg,
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      tags: [TagType.TRADICIONAL, TagType.COMLEITE],
    },
    {
      id: 10,
      name: 'Chocolate Quente',
      image: chocolateQuenteImg,
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
      tags: [TagType.TRADICIONAL, TagType.COMLEITE],
    },
    {
      id: 11,
      name: 'Cubano',
      image: cubanoImg,
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
      tags: [TagType.ESPECIAL, TagType.ALCOOLICO, TagType.GELADO],
    },
    {
      id: 12,
      name: 'Havaiano',
      image: havaianoImg,
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      tags: [TagType.ESPECIAL],
    },
    {
      id: 13,
      name: 'Árabe',
      image: arabeImg,
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
      tags: [TagType.ESPECIAL],
    },
    {
      id: 14,
      name: 'Irlândes',
      image: irlandesImg,
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
      tags: [TagType.ESPECIAL, TagType.ALCOOLICO],
    },
  ]

  const [shoppingCartItems, setShoppingCartItems] = useState<IItemOrder[]>([])

  return (
    <ShoppingCartContext.Provider
      value={{ coffees, shoppingCartItems, setShoppingCartItems }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
