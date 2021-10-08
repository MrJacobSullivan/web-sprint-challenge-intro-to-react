import { useEffect } from 'react'
import axios from 'axios'

export const useFetctDataPrint = (url) => {
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }, [url])
}
