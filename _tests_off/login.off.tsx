// Note: This spec file is turned off because it needs some touching up to
//       be able to test using the useInterpeter and useContext providers.
//
// Uncaught [TypeError: Cannot read properties of undefined (reading 'matches')]
//       36 |   const globalServices = useContext(GlobalStateContext)
//       37 |   const [state] = useActor(globalServices.authService)
//     > 38 |   const isLoggedIn = state.matches("loggedIn")

import "@testing-library/jest-dom"

import Login from "@/pages/login"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"

describe("/login page", () => {
  test("loads and displays login screen", async () => {
    render(<Login />)

    expect(screen.getByRole("button")).toHaveTextContent(/login/i)
  })

  test("both email address and password fields are required", async () => {
    render(<Login />)

    fireEvent.click(screen.getByRole("button"))
    let errors: HTMLElement[] = []
    await waitFor(() => (errors = screen.getAllByRole("alert")))
    errors.forEach((error) => {
      expect(error).toHaveTextContent(/required/i)
      expect(error).toHaveAttribute("aria-live", "polite")
    })
  })

  test("successful login with admin/admin", async () => {
    render(<Login />)

    fireEvent.change(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "admin" },
    })
    fireEvent.change(screen.getByRole("textbox", { name: /Password/i }), {
      target: { value: "admin" },
    })

    fireEvent.click(screen.getByRole("button"))
    await waitFor(() =>
      expect(screen.getByRole("heading")).toHaveTextContent(/Successful login/i)
    )
    expect(screen.getByRole("heading")).toBeVisible()
    expect(screen.getByText(/Redirecting/i)).toBeVisible()
  })
})
