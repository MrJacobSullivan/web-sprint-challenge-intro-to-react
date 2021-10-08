import React, { useState } from 'react'
import { CharacterCard, CharacterName, CharacterDetailsWrapper, Text, Label, Value } from './Styled'

export default function Character({ name, height, mass, gender, birth_year }) {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  return (
    <CharacterCard onClick={handleClick} open={open}>
      <CharacterName open={open}>{name}</CharacterName>
      <CharacterDetailsWrapper open={open}>
        <Text>
          <Label>Height</Label>
          <Value>
            {height} <span>cm</span>
          </Value>
        </Text>
        <Text>
          <Label>Mass</Label>
          <Value>
            {mass} <span>kg</span>
          </Value>
        </Text>
        <Text>
          <Label>Gender</Label>
          <Value>{gender === 'n/a' ? 'Unknown' : gender}</Value>
        </Text>
        <Text>
          <Label>Birth Year</Label>
          <Value>{birth_year}</Value>
        </Text>
      </CharacterDetailsWrapper>
    </CharacterCard>
  )
}
