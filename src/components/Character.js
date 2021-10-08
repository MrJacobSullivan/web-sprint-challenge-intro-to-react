import React, { useState } from 'react'
import CharacterDetails from './CharacterDetails'
import { CharacterCard, CharacterName } from './Styled'

export default function Character({ character }) {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  return (
    <CharacterCard onClick={handleClick} open={open}>
      <CharacterName open={open}>{character.name}</CharacterName>
      <CharacterDetails open={open} {...character} />
    </CharacterCard>
  )
}
