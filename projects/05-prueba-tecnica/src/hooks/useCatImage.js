import { useEffect, useState } from 'react'
const CAT_PREFIX_END_POINT = 'https://cataas.com/'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  // recuperar imagen cada vez que tenemos un nuevo fact
  useEffect(() => {
    if (!fact) return
    const firstThreeWords = fact.split(' ', 3).join(' ') // split(' ').slice(0, 3).join(' ') para que sean 3 palabras
    console.log(firstThreeWords)

    fetch(`https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])
  return { imageUrl: `${CAT_PREFIX_END_POINT}${imageUrl}` }
} // devuelve el URL de la imagen pasando el fact.
