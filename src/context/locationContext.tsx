import axios from 'axios'
import { createContext, ReactNode, useEffect, useState } from 'react'

type StateAPIResponse = {
  id: number
  sigla: string
  nome: string
  regiao: {
    id: number
    nome: string
    sigla: string
  }
}

type locationContextProps = {
  states: string[]
  state: string
  handleChangeState: (value: string) => void
}

export const locationContext = createContext({} as locationContextProps)

type locationProviderProps = {
  children: ReactNode
}

export function LocationProvider({ children }: locationProviderProps) {
  const [states, setStates] = useState<string[]>([])
  const [state, setState] = useState('')

  useEffect(() => {
    axios('http://localhost:3333/location/states').then((response) => {
      const items: StateAPIResponse[] = response.data.states
      const siglas: string[] = []
      items.forEach((element) => siglas.push(element.sigla))
      setStates(siglas.sort())
    })
  }, [])

  function handleChangeState(value: string) {
    setState(value)
  }

  return (
    <locationContext.Provider value={{ states, state, handleChangeState }}>
      {children}
    </locationContext.Provider>
  )
}
