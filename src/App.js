import React from 'react'
import CharacterList from './components/CharacterList'
import { Main, Title } from './components/Styled'
import './App.css'

const App = () => {
  return (
    <Main>
      <Title>Characters</Title>
      <CharacterList />
    </Main>
  )
}

export default App
