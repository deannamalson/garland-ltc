import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Home from "../../pages/index";

test("should render Home correctly", () => {
  const wrapper = shallow(<Home />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
