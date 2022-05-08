// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true
  eventsCausingActions: {
    updateUserInContext: "LOG_IN"
    saveUserToLocalStorage: "LOG_IN"
    clearUserFromContext: "LOG_OUT"
    clearUserFromLocalStorage: "LOG_OUT"
  }
  internalEvents: {
    "xstate.init": { type: "xstate.init" }
  }
  invokeSrcNameMap: {}
  missingImplementations: {
    actions: never
    services: never
    guards: never
    delays: never
  }
  eventsCausingServices: {}
  eventsCausingGuards: {}
  eventsCausingDelays: {}
  matchesStates: "loggedOut" | "loggedIn"
  tags: never
}
