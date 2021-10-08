import { CharacterDetailsWrapper, Text, Label, Value } from './Styled'

export default function CharacterDetails({ open, height, mass, gender, birth_year }) {
  return (
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
  )
}
