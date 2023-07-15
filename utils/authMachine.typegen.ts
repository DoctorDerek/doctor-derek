// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true
  internalEvents: {
    "xstate.init": { type: "xstate.init" }
  }
  invokeSrcNameMap: {}
  missingImplementations: {
    actions: never
    delays: never
    guards: never
    services: never
  }
  eventsCausingActions: {
    clearUserFromContext: "LOG_OUT"
    clearUserFromLocalStorage: "LOG_OUT"
    saveUserToLocalStorage: "LOG_IN"
    updateUserInContext: "LOG_IN"
  }
  eventsCausingDelays: {}
  eventsCausingGuards: {}
  eventsCausingServices: {}
  matchesStates: "loggedIn" | "loggedOut"
  tags: never
}
