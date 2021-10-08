import React from 'react'
import InformationCard from './InformationCard'
import { useFetctDataPrint } from '../hooks/useDataFetchPrint'

export default function Character({ character }) {
  useFetctDataPrint(character.url)

  return <InformationCard {...character} />
}
