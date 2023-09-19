import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts'
import './App.css'

const CAT_PREFIX_END_POINT = 'https://cataas.com/'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => { getRandomFact(setFact) }, [])

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
