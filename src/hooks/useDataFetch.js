import { useState, useEffect } from 'react'
import axios from 'axios'

export const useDataFetch = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data)
        setData(() => res.data)
      })
      .catch((err) => console.log(err))
  }, [url])

  return data
}
