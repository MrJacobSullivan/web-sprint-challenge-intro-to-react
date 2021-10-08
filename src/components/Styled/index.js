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
  margin-bottom: 5%;
  width: 60%;

  color: ${({ theme }) => theme.text};
`

export const CharacterCard = styled.li`
  cursor: pointer;
  height: auto;
  margin: 2%;
  padding: 5%;
  transition: all 0.3s ease-out;

  * {
    transition: all 0.3s ease-out;
  }

  background: ${({ theme }) => theme['secondary-background']};
  border: 2px solid ${({ theme, open }) => (open ? theme.secondary : 'transparent')};

  &:hover {
    border: 2px solid ${({ theme, open }) => (open ? theme.secondary : theme.tertiary)};
  }
`

export const CharacterName = styled.h2`
  display: flex;
  font-size: 1.6rem;
  font-weight: 700;
  justify-content: center;
  margin: 0;
  padding: 5% 0 7%;
  width: 100%;

  background: ${({ theme }) => theme['secondary-background']};
  border-bottom: 1px solid ${({ open, theme }) => (open ? theme.secondary : theme.text)};

  &:hover {
    border-bottom: 1px solid ${({ open, theme }) => (open ? theme.secondary : theme.tertiary)};
  }
`

export const CharacterDetailsWrapper = styled.div`
  overflow: hidden;
  width: 100%;

  margin-top: ${({ open }) => (open ? '5%' : '0')};
  max-height: ${({ open }) => (open ? '20vh' : '0')};
`

export const Text = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3% 0;
`

export const Label = styled.p`
  font-weight: 300;
`

export const Value = styled.p`
  font-weight: 400;
  text-transform: capitalize;

  span {
    text-transform: none;
  }
`
