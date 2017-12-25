export const SET_USER = 'SET_USER'
export const SET_ERROR = 'SET_ERROR'

export function setUser(data) {
  return {
    type: 'SET_USER',
    data
  }
}

export function setError(error) {
  return {
    type: 'SET_ERROR',
    error
  }
}
