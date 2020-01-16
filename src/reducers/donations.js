export const donations = (state = [], action) => {
  switch(action.type) {
    case 'GET_DONATIONS':
      return [...state, action.donations]
    default:
      return state
  }
}
