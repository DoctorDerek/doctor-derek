// __tests__/fetch.test.js
import "@testing-library/jest-dom"

import Home from "@/pages/[id]"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"

test("loads and displays homepage", async () => {
  render(<Home />)

  // fireEvent.click(screen.getByText("Load Greeting"))

  // await waitFor(() => screen.getByRole("heading"))

  expect(screen.getAllByRole("heading")[0]).toHaveTextContent(/welcome/i)
})
