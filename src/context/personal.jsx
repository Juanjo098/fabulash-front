import { createContext, useEffect, useState } from 'react'

export const PersonalContext = createContext()

const initialState = () => {
  const info = window.localStorage.getItem('service')
  return info ? JSON.parse(info) : { service: 0, employee: 0 }
}

export function PersonalProvider ({ children }) {
  const [isSelected, setSelected] = useState(initialState())

  useEffect(() => {
    window.localStorage.setItem('service', JSON.stringify(isSelected))
  }, [isSelected])

  return (
    <PersonalContext.Provider value={{
      isSelected,
      setSelected
    }}
    >
      {children}
    </PersonalContext.Provider>
  )
}
