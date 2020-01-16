export const getAnimalsCall = () => {
  return fetch('http://localhost:3001/api/v1/rescue-animals')
    .then(res => {
      if(!res.ok) {
        throw Error('Error fetching movies')
      }
      return res.json()
    })
}

export const getDonationsCall = () => {
  return fetch('http://localhost:3001/api/v1/donations')
    .then(res => {
      if(!res.ok) {
        throw Error('Error fetching movies')
      }
      return res.json()
    })
}

export const postDonation = (donation) => {
  const options ={
    method: 'POST',
    body: JSON.stringify(
      donation
    ),
    headers: {
      'Content-Type': 'application/json'  
    }
}

  return fetch('http://localhost:3001/api/v1/donations', options)
    .then(res => {
      if(!res.ok) {
        throw Error('Something is not right, try again later')
      }
      return res.json()})
}