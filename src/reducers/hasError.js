export const hasError = (state = null, action) => {
  switch(action.type) {
    case 'HAS_ERROR':
      return action.errorStatus
    default:
      return state
  }
}