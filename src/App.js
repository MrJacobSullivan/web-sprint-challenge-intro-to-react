import React from 'react'

import { Main, Title } from './components/Styled'
import CharacterList from './components/CharacterList'

import './reset.css'
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
