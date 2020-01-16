export const getAnimals = animals => ({
  type: 'GET_ANIMALS',
  animals
});

export const isLoading = loading => ({
  type: 'IS_LOADING',
  loading
});

export const hasError = errorStatus => ({
  type: 'HAS_ERROR',
  errorStatus
});