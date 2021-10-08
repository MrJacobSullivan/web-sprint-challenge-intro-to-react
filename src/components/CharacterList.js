import React, { useState, useEffect } from 'react'
import { CharacterListContainer } from './Styled'
import Character from './Character'
import { useDataFetch } from '../hooks/useDataFetch'
import { BASE_URL } from '../constants'

export default function CharacterList() {
  const [loading, setLoading] = useState(true)

  const data = useDataFetch(BASE_URL)

  useEffect(() => {
    if (data) setLoading(false)
  }, [data])

  return (
    <CharacterListContainer className='accordion'>
      {loading ? (
        <p>loading...</p>
      ) : (
        <ul>
          {data.map((character, index) => (
            <Character key={index} {...character} />
          ))}
        </ul>
      )}
    </CharacterListContainer>
  )
}
