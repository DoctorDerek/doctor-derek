// Note: This spec file is turned off because it needs some touching up to
//       be able to test using the useInterpeter and useContext providers.
import AppContainer from "@/components/AppContainer"
import GlobalStateContext from "@/components/GlobalStateContext"
import authMachine from "@/utils/authMachine"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { useInterpret } from "@xstate/react"

describe("<AppContainer> component", () => {
  it("renders", () => {
    const authService = useInterpret(authMachine)
    render(
      <GlobalStateContext.Provider value={{ authService }}>
        {/* We can access React context throughout the app via Provider */}
        <AppContainer>Howdy</AppContainer>
      </GlobalStateContext.Provider>
    )
    expect(screen.getByText("Howdy")).toBeVisible()
  })
})
