import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts'
import './App.css'
const CAT_PREFIX_END_POINT = 'https://cataas.com/'

function useCatImage ({ fact }) {
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
  return { imageUrl }
} // devuelve el IMG pasando el hecho.

export function App () {
  const [fact, setFact] = useState()
  const { imageUrl } = useCatImage({ fact })

  // recuperar cita al cargar la pagina
  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App de Gatuchis</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${CAT_PREFIX_END_POINT}${imageUrl}`} alt={`Image extracted using the frist three words for ${fact}`} />}
      </section>
    </main>
  ) // renderizado condicional
}
