import { useContext, useState } from 'react'
import { ShoppingCart } from 'phosphor-react'

import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { ICoffee } from '../../interfaces/ICoffee'
import { IItemOrder } from '../../interfaces/IItemOrder'

import { CardContainer, PriceContainer } from './styles'

export function Card(coffee: ICoffee) {
  const { shoppingCartItems, setShoppingCartItems } =
    useContext(ShoppingCartContext)
  console.log(shoppingCartItems)
  const [coffeeQuantity, setCoffeeQuantity] = useState(1)

  function handleAddCoffeeToShoppingCart() {
    const checkCoffeeInShoppingCart = shoppingCartItems.find(
      (item) => item.coffee.id === coffee.id,
    )

    if (!checkCoffeeInShoppingCart) {
      const newItemOrder: IItemOrder = {
        coffee,
        quantity: coffeeQuantity,
      }
      setShoppingCartItems([...shoppingCartItems, newItemOrder])
    } else {
      setShoppingCartItems(
        shoppingCartItems.map((item) => {
          if (item.coffee.id === coffee.id)
            item.quantity = checkCoffeeInShoppingCart.quantity + coffeeQuantity

          return item
        }),
      )
    }

    setCoffeeQuantity(1)
  }

  function handleRaiseCoffeeQuantity() {
    const newCoffeeQuantity = coffeeQuantity + 1
    setCoffeeQuantity(newCoffeeQuantity)
  }

  function handleLowerCoffeeQuantity() {
    const newCoffeeQuantity = coffeeQuantity - 1

    if (newCoffeeQuantity > 0) setCoffeeQuantity(newCoffeeQuantity)
  }

  const numberFormat = (value: number) =>
    new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(value)

  return (
    <CardContainer>
      <img src={coffee.image} alt="" />
      <div className="coffeeTags">
        {coffee.tags.map((tag) => {
          return <span key="">{tag}</span>
        })}
      </div>
      <label className="title">{coffee.name}</label>
      <span className="description">{coffee.description}</span>
      <PriceContainer>
        <p>
          R$ <span>{numberFormat(coffee.price)}</span>
        </p>
        <div className="coffeHandlerContainer">
          <div>
            <a onClick={handleLowerCoffeeQuantity}>-</a>
            {coffeeQuantity}
            <a onClick={handleRaiseCoffeeQuantity}>+</a>
          </div>

          <button onClick={handleAddCoffeeToShoppingCart}>
            <ShoppingCart size={16} weight="fill" />
          </button>
        </div>
      </PriceContainer>
    </CardContainer>
  )
}
