import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useContext } from 'react'

import {
  CoffeesContainer,
  DetailsContainer,
  HomeContainer,
  ItemsContainer,
  TitleContainer,
} from './styles'

import mainCoffeeImg from '../../assets/main-coffee.svg'
import { Card } from '../../components/Card'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'

export function Home() {
  const { coffees } = useContext(ShoppingCartContext)

  return (
    <HomeContainer>
      <TitleContainer>
        <div className="backgroundImgContainer">
          <DetailsContainer>
            <div className="titleArea">
              <h1>Encontre o café perfeito para qualquer hora do seu dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </div>
            <div className="itemsArea">
              <ItemsContainer>
                <span className="firstItem">
                  <ShoppingCart size={16} weight="fill" />
                </span>
                Compra simples e segura
              </ItemsContainer>
              <ItemsContainer>
                <span className="secondItem">
                  <Package size={16} weight="fill" />
                </span>
                Embalagem mantém o café intacto
              </ItemsContainer>
              <ItemsContainer>
                <span className="thirdItem">
                  <Timer size={16} weight="fill" />
                </span>
                Entrega rápida e rastreada
              </ItemsContainer>
              <ItemsContainer>
                <span className="fourthItem">
                  <Coffee size={16} weight="fill" />
                </span>
                O café chega fresquinho até você
              </ItemsContainer>
            </div>
          </DetailsContainer>
          <img src={mainCoffeeImg} alt="" />
        </div>
      </TitleContainer>
      <CoffeesContainer>
        <h2>Nossos cafés</h2>
        <div className="cardArea">
          {coffees.map(function (coffee) {
            return (
              <Card
                key={coffee.id}
                name={coffee.name}
                image={coffee.image}
                id={coffee.id}
                description={coffee.description}
                price={coffee.price}
                tags={coffee.tags}
              />
            )
          })}
        </div>
      </CoffeesContainer>
    </HomeContainer>
  )
}
