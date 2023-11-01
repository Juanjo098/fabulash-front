import { createContext, useState } from 'react'

export const PersonalContext = createContext()

export function PersonalProvider ({ children }) {
  const [isSelected, setSelected] = useState(0)

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