import { describe, expect, test } from "vitest"
import { shallow } from "enzyme"
import App from "../App"

describe("Testing <App/>", () => {
  test("it should show correctly <App/> component", () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})
