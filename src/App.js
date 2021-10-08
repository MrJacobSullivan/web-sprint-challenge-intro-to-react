import React from 'react'

import { Main, Title } from './components/Styled'
import CharacterList from './components/CharacterList'

import './App.css'

const App = () => {
  return (
    <Main className='container'>
      <Title>Characters</Title>
      <CharacterList />
    </Main>
  )
}

export default App
