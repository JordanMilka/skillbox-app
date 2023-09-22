import { shallow } from "enzyme"
import Enzyme from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import { Dropdown } from "../Dropdown"
import React from "react"

// @jest-environment jsdom нужно прописывать в /** * */, чтобы использовать window

Enzyme.configure({ adapter: new Adapter() })

describe("Dropdown", () => {
	test("should render", () => {
		const wrapper = shallow(<Dropdown children={<div></div>} button={<button></button>} />)
		expect(wrapper).toBeDefined()
		// console.log(window) // window is not defined
		expect(wrapper.find("button").isEmptyRender()).toBeFalsy()
	})

	test("should render (snapshot)", () => {
		const wrapper = shallow(<Dropdown children={<div></div>} button={<button></button>} />)
		expect(wrapper).toMatchSnapshot()
	})
})
