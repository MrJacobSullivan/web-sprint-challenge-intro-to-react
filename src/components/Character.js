import React from 'react'
import { CharacterCard, CharacterName, CharacterBirthYear } from './Styled'
import { useFetctDataPrint } from '../hooks/useDataFetchPrint'

export default function Character({ name, birth_year, url }) {
  useFetctDataPrint(url)

  return (
    <CharacterCard>
      <CharacterName>{name}</CharacterName>
      <CharacterBirthYear>{birth_year}</CharacterBirthYear>
    </CharacterCard>
  )
}
