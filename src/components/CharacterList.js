import React, { useState, useEffect } from 'react'
import Character from './Character'
import { CharacterListContainer, Loading } from './Styled'
import { useCharacterData } from '../hooks/useCharacterData'

export default function CharacterList() {
  const [loading, setLoading] = useState(true)

  const data = useCharacterData()

  useEffect(() => {
    if (data) setLoading(() => false)
  }, [data])

  if (loading) return <Loading>loading...</Loading>

  return (
    <CharacterListContainer>
      {
        <ul>
          {data.map((character, index) => (
            <Character key={index} character={character} />
          ))}
        </ul>
      }
    </CharacterListContainer>
  )
}
