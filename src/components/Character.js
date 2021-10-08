import React from 'react'
import { useFetctDataPrint } from '../hooks/useDataFetchPrint'

export default function Character({ character }) {
  useFetctDataPrint(character.url)

  return (
    <div>
      <h2>{character.name}</h2>
      <p>{character.birth_year}</p>
      <p>{character.eye_color}</p>
    </div>
  )
}
