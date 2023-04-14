import React from "react";
import { render } from "@testing-library/react";
import { Home } from "../../pages/Home";

test('Home Page', () => {
  //if ('should be able to home', () => {
  const { getByText } = render(<Home />);
  expect(getByText('Pokemon')).toBeTruthy()

});