import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Hero from "../../components/Hero";

test("should render Hero correctly", () => {
  const wrapper = shallow(<Hero />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
