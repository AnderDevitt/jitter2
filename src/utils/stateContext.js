import { createContext, useContext } from "react"

// this makes the state available all around the app

export const StateContext = createContext()
export const useGlobalState = () => useContext(StateContext)


