import React, { useState, createContext } from 'react'

const AppContext = createContext()

export const AppProvider = props => {
  const [state, _setState] = useState({ products: [] })

  const setState = (newState = {}) => _setState({ ...state, ...newState })

  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext