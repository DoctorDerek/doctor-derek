import AppContainer from "@/components/AppContainer"
import classNames from "@/utils/classNames"

describe("classNames utility function", () => {
  it("works", () => {
    expect(classNames("1")).toBe("1")
    expect(classNames("1", "2")).toBe("1 2")
    expect(classNames("1", "2", "3")).toBe("1 2 3")
  })
})
