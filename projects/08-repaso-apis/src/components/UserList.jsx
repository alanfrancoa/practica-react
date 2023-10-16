import propTypes from 'prop-types'
import { useEffect } from 'react'
import { useState } from "react"

export const UserList = ({endPoint}) => {
    const [data, setData] = useState([])
  
  useEffect( () => {
    const fetchData = async() => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
          const data = await response.json()
          setData(data)
        } catch(error){
          console.error(error)
        }
      }
    
    fetchData()
  }, [endPoint])

  return (
    <>
    <ul>
    {endPoint == 'users' ? data.map(item => <li key={item.id}>{item.name} <br />Email: {item.email}</li>)
                            : 
                         data.map(item => <li key={item.id}>{item.name} <br />Comentario: {item.body}</li>)}
  </ul>
  </>
  )
}


UserList.propTypes = {
    endPoint : propTypes.string.isRequired,
}