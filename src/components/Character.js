import React, { useState } from 'react'
import { CharacterCard, CharacterName, CharacterDetailsWrapper, Label, Text } from './Styled'
import { useFetctDataPrint } from '../hooks/useDataFetchPrint'

export default function Character({ name, birth_year }) {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  return (
    <CharacterCard>
      <CharacterName onClick={handleClick}>
        {name}
        <span>{open ? '-' : '+'}</span>
      </CharacterName>
      <CharacterDetailsWrapper open={open}>
        <Label>
          Birth Year: <Text>{birth_year}</Text>
        </Label>
      </CharacterDetailsWrapper>
    </CharacterCard>
  )
}
