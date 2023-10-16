import { useState } from "react"
import { useEffect } from "react"
import { fetchdata } from "../helpers/fetchData"

export const useFetchData = (endPoint) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    fetchdata(endPoint)
    .then(res => {
      setData(res.data)
      setIsLoading(res.isLoading)
    })
  }, [endPoint])
    
  return {
    data,
    isLoading,
  }
}
