import styled from 'styled-components'

import backgroundImg from '../../assets/home-background.svg'

export const HomeContainer = styled.div``

export const TitleContainer = styled.div`
  margin: 6rem 0;
  background-size: contain;
  background-image: url(${backgroundImg});

  .backgroundImgContainer {
    max-width: 70rem;
    margin: 0 auto;
    padding: 0 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const DetailsContainer = styled.div`
  max-width: 37rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  .titleArea {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 2.7rem;
      color: ${(props) => props.theme['base-title']};
      line-height: 1.3;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  .itemsArea {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.7rem;

  span {
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 50%;
    color: ${(props) => props.theme.white};
  }

  .firstItem {
    background: ${(props) => props.theme['yellow-dark']};
  }

  .secondItem {
    background: ${(props) => props.theme['base-text']};
  }

  .thirdItem {
    background: ${(props) => props.theme.yellow};
  }

  .fourthItem {
    background: ${(props) => props.theme.purple};
  }
`

export const CoffeesContainer = styled.div`
  max-width: 70rem;
  margin: 6rem auto;
  padding: 0 1rem;

  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 3.375rem;
  }

  .cardArea {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }
`
