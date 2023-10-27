import { useEffect } from "react"
import { useState } from "react"

const useFetch = (url) => {
    
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        errors: null,
    })
    const getFetch = async () =>{
        try{
            const response = await fetch (url)
            const data = await response.json()
            setState({
                data,
                isLoading: false,
                errors: null,
            })
        } catch (error){
            setState({
                data: null,
                isLoading: false,
                errors: error,
            })
        }
    }
    useEffect (() => {
        if (!url) return
        getFetch()
    }, [url])

    const {data, isLoading, errors} = state
    return {
        data,
        isLoading,
        errors,
    }
}

export default useFetch