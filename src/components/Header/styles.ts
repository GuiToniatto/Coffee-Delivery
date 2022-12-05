import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 0.5rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.3rem;

      padding: 0.5rem;

      border-radius: 6px;

      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};
    }

    a {
      display: flex;
      align-items: center;
      padding: 0.5rem;

      border-radius: 6px;

      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};

      transition: opacity 0.2s;

      &:hover {
        opacity: 0.7;
        transition: opacity 0.2s;
      }
    }
  }
`
