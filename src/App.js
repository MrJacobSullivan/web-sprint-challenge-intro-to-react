import React, { useState, useEffect } from 'react'
import { useDataFetch } from './hooks/useDataFetch'
import { BASE_URL } from './constants'
import Character from './components/Character'
import { Main } from './components/Styled'
import './reset.css'
import './App.css'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [loading, setLoading] = useState(true)

  const data = useDataFetch(BASE_URL)

  useEffect(() => {
    if (data) setLoading(false)
  }, [data])

  return (
    <Main>
      <h1 className='Header'>Characters</h1>
      {loading ? (
        <p>loading...</p>
      ) : (
        <ul>
          {data.map((character) => (
            <li key={character.name}>
              <Character character={character} />
            </li>
          ))}
        </ul>
      )}
    </Main>
  )
}

export default App
