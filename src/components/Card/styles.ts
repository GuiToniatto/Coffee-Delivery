import styled from 'styled-components'

export const CardContainer = styled.div`
  height: fit-content;
  max-width: 16rem;
  padding: 1.25rem;

  background: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: calc(0px - 7.5rem + 5rem);
  }

  .title {
    margin-top: 1rem;
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .description {
    margin-top: 0.5rem;
    font-size: 0.75rem;
  }

  .coffeeTags {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.75rem;

    color: ${(props) => props.theme['yellow-dark']};

    font-size: 0.625rem;

    span {
      padding: 4px 8px;
      background: ${(props) => props.theme['yellow-light']};

      border-radius: 100px;
    }
  }
`
export const PriceContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  p {
    font-size: 0.875rem;

    span {
      font-family: 'Baloo 2';
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 1.3;

      margin-left: 0.3rem;
    }
  }

  .coffeHandlerContainer {
    display: flex;
    gap: 0.5rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      padding: 8px 12px;

      background: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme['base-title']};

      border-radius: 6px;

      a {
        cursor: pointer;
        color: ${(props) => props.theme.purple};

        font-weight: 700;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 8px;
      background: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme.white};

      border: none;
      border-radius: 6px;

      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background: ${(props) => props.theme.purple};
        transition: background 0.2s;
      }
    }
  }
`
