export const fetchdata = async(endPoint) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
        const data = await response.json()
        console.log(data)
        return {
            data, 
            isLoading: false
        }

    } catch (error){
        console.log(error)
    }
}