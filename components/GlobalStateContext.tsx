import { createContext } from "react"
import { InterpreterFrom } from "xstate"

import authMachine from "@/utils/authMachine"

const GlobalStateContext = createContext({
  authService: {} as InterpreterFrom<typeof authMachine>,
})

export default GlobalStateContext
