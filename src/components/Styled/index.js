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

export const CharacterCard = styled.li`
  margin: 2%;

  height: auto;

  background: ${({ theme }) => theme['secondary-background']};
`

export const CharacterDetails = styled.div``

export const CharacterName = styled.button`
  font-size: 1.6rem;
  width: 100%;
  margin: 0;

  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.tertiary};
  }

  background: ${({ theme }) => theme['secondary-background']};
`

export const CharacterDetailsWrapper = styled.div`
  overflow: hidden;
  /* transition: all 0.4s ease-in-out; */
  width: 100%;

  max-height: ${({ open }) => (open ? '20vh' : '0')};
`

export const Label = styled.span``
export const Text = styled.span``
