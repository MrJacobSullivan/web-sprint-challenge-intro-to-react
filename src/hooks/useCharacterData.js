import { useState, useEffect } from 'react'
import { useDataFetch } from './useDataFetch'
import { handleCharacterData } from '../utils/handleCharacterData'
import { BASE_URL } from '../constants'
import { params } from '../config'

export const useCharacterData = () => {
  const [characters, setCharacters] = useState(null)

  const data = useDataFetch(BASE_URL)

  useEffect(() => {
    if (data) {
      const res = handleCharacterData(data, params)
      setCharacters(() => res)
    }
  }, [data])

  return characters
}
