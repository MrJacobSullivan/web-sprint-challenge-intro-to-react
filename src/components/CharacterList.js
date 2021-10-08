import React, { useState, useEffect } from 'react'
import Character from './Character'
import { CharacterListContainer, Loading } from './Styled'
import { useDataFetch } from '../hooks/useDataFetch'
import { BASE_URL } from '../constants'

export default function CharacterList() {
  const [loading, setLoading] = useState(true)

  const data = useDataFetch(BASE_URL)

  useEffect(() => {
    if (data) setLoading(false)
  }, [data])

  if (loading) return <Loading>loading...</Loading>

  return (
    <CharacterListContainer>
      {
        <ul>
          {data.map((character, index) => (
            <Character key={index} {...character} />
          ))}
        </ul>
      }
    </CharacterListContainer>
  )
}
