import Link from "next/link"
import { useContext, useEffect, useState } from "react"

import GlobalStateContext from "@/components/GlobalStateContext"
import authMachine, {
  LOCALSTORAGE_KEY_AUTH,
  validateHashToken,
} from "@/utils/authMachine"
import { useActor } from "@xstate/react"

export default function UserAuthComponent() {
  // Retrieve our loggedIn/loggedOut status from the global context with xState:
  const globalServices = useContext(GlobalStateContext)
  const [state] = useActor(globalServices.authService)
  const isLoggedIn = state.matches("loggedIn")
  const { send } = globalServices.authService

  // When we first load, load persisted context from localStorage, if it exists.
  // The following useEffect hook will set the authorizedUser from localStorage:
  useEffect(() => {
    const localStorageString = localStorage.getItem(LOCALSTORAGE_KEY_AUTH)
    try {
      const localStorageObject = localStorageString
        ? (JSON.parse(localStorageString) as typeof authMachine.schema.context)
        : null
      if (
        localStorageObject &&
        localStorageObject?.authorizedUser &&
        localStorageObject?.authToken
      ) {
        // Now we know it's safe to destructure the object.
        const { authorizedUser, authToken } = localStorageObject
        // Check to see if we have a valid authorization token in localStorage.
        const isValidAuthToken = validateHashToken({
          user: authorizedUser,
          token: authToken,
        })
        // We should only log in from localStorage with a valid auth token.
        if (isValidAuthToken) send("LOG_IN", { authorizedUser })
      }
    } catch (e) {
      // We probably failed on JSON.parse() of corrupted localStorage data.
      // Let's just console.log() the error and move on with our lives 😅
      console.log(e)
    }
  }, [send]) // Only run the useEffect hook the 1st time we load the component.
  // Note that send should never change, since it's a helper from authService.

  return (
    <div className="absolute right-0 top-0 mt-2 mr-4 text-white">
      {isLoggedIn && (
        <>
          Logged In as {state.context.authorizedUser}
          {" | "}
          <button type="button" onClick={() => send("LOG_OUT")}>
            Logout
          </button>
        </>
      )}
      {!isLoggedIn && (
        <>
          Logged Out{" | "}
          <Link href="/login">Login</Link>
        </>
      )}
    </div>
  )
}
