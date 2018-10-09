const loadState = key => {
  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (e) {
    return undefined
  }
}

const saveState = (key, value) => {
  try {
    const serializedState = JSON.stringify(value)
    localStorage.setItem(key, serializedState)
  } catch (e) {
    // Ignores write errors
  }
}

export default { loadState, saveState }
