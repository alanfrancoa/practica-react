const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
export const getRandomFact = (setFact) => {
  fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      setFact(fact)
    })
}
