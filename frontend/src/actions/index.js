export const DECREMENT = 'DECREMENT'
export const INCREMENT = 'INCREMENT'

export const increment = () => {
  return {
    type:INCREMENT
  }  
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}