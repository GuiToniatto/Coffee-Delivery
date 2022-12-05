import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 16rem;
  max-width: 16rem;
  padding: 1.25rem;

  background: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: calc(0px - 7.5rem + 5rem);
  }
`
