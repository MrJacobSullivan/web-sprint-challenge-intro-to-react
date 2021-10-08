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
  padding: 5%;
  cursor: pointer;

  * {
    transition: all 0.3s ease-out;
  }

  border: 2px solid ${({ theme, open }) => (open ? theme.secondary : 'transparent')};

  &:hover {
    border: 2px solid ${({ theme, open }) => (open ? theme.secondary : theme.tertiary)};
  }

  background: ${({ theme }) => theme['secondary-background']};
`

export const CharacterName = styled.h2`
  font-size: 1.6rem;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  padding: 5% 0;

  border-bottom: 1px solid ${({ open, theme }) => (open ? theme.secondary : theme.text)};

  background: ${({ theme }) => theme['secondary-background']};
`

export const CharacterDetailsWrapper = styled.div`
  overflow: hidden;
  width: 100%;

  margin-top: ${({ open }) => (open ? '5%' : '0')};
  max-height: ${({ open }) => (open ? '20vh' : '0')};
`

export const Label = styled.p`
  display: flex;
  justify-content: space-around;
`

export const Text = styled.span``
