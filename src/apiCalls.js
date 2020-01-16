export const getAnimals = () => {
  return fetch('http://localhost:3001/api/v1/rescue-animals')
    .then(res => {
      if(!res.ok) {
        throw Error('Error fetching movies')
      }
      return res.json()
    })
}