import { ICoffee } from '../../interfaces/ICoffee'

import { CardContainer } from './styles'

export function Card({ image, name }: ICoffee) {
  return (
    <CardContainer>
      <img src={image} alt="" />
      <label>{name}</label>
    </CardContainer>
  )
}
