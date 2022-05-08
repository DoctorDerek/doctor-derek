import "@/styles/globals.css"

import GlobalStateContext from "@/components/GlobalStateContext"
import authMachine from "@/utils/authMachine"
import { useInterpret } from "@xstate/react"

import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  const authService = useInterpret(authMachine, {
    context: authMachine.context,
  })
  return (
    <GlobalStateContext.Provider value={{ authService }}>
      {/* We can access this context throughout the app because of .Provider */}
      <Component {...pageProps} />
    </GlobalStateContext.Provider>
  )
}

export default MyApp
