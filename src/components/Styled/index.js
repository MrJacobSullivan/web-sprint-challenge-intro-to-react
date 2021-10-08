import styled from 'styled-components'

export const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;

  background: ${({ theme }) => theme.background};
`

export const Title = styled.h1`
  font-size: 2.4rem;
  margin: 5% 0 2%;

  color: ${({ theme }) => theme.text};
`

export const CharacterListContainer = styled.section`
  width: 60%;
  color: ${({ theme }) => theme.text};
`

export const CharacterCard = styled.section`
  margin: 2%;
  padding: 5%;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.tertiary};
  }

  background: ${({ theme }) => theme['secondary-background']};
`

export const CharacterName = styled.h2``

export const CharacterBirthYear = styled.p``
