export const loadState = () => {
  try {
    const serialisedState = localStorage.getItem('user')
    if (serialisedState === null) {
      return undefined
    }
    return JSON.parse(serialisedState)
  } catch (err) {
      return undefined;
  }
}

export const saveState = (state) => {
  try {
    const serialisedState = JSON.stringify(state)
    localStorage.setItem('user', serialisedState)
  } catch (err) {
      console.log(err)
  }
}
