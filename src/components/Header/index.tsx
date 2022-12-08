import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'

import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'

import { HeaderContainer } from './styles'

import logoImg from '../../assets/logo.svg'

export function Header() {
  const { shoppingCartItems } = useContext(ShoppingCartContext)

  return (
    <HeaderContainer>
      <img src={logoImg} alt="logo" />

      <div>
        <span>
          <MapPin size={32} color="#8047F8" weight="fill" />
          Porto Alegre, RS
        </span>
        <a href="#">
          <ShoppingCart size={32} weight="fill" />
          {shoppingCartItems.length > 0 ? (
            <label>{shoppingCartItems.length}</label>
          ) : (
            ''
          )}
        </a>
      </div>
    </HeaderContainer>
  )
}
