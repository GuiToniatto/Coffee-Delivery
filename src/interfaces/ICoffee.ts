export enum TagType {
  TRADICIONAL = 'TRADICIONAL',
  GELADO = 'GELADO',
  COMLEITE = 'COM LEITE',
  ALCOOLICO = 'ALCOÓLICO',
  ESPECIAL = 'ESPECIAL',
}

export interface ICoffee {
  id: number
  name: string
  description: string
  price: number
  image: string
  tags: TagType[]
}
