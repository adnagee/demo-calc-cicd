// add one jest test
//import 'jsdom-global/register'; // Import jsdom-global at the beginning of the test file
import 'text-encoding-utf-8'; //
import React from "react";
//import { render, screen, expect, fireEvent } from "@testing-library/react";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from "../../App";

//aimport 'jsdom-global/register';


// test("renders calculator title", () => {
//   render(<App />);
//   const titleElement = screen.getByText(/Simple Calculator/i);
//   expect(titleElement).toBeInTheDocument();
// });

test("performs addition correctly", () => {
  render(<App />);
  const num1Input = screen.getByLabelText("Number 1");
  const operatorSelect = screen.getByLabelText("Operator");
  const num2Input = screen.getByLabelText("Number 2");
  const calculateButton = screen.getByText("Calculate");

  fireEvent.change(num1Input, { target: { value: "3" } });
  fireEvent.change(operatorSelect, { target: { value: "+" } });
  fireEvent.change(num2Input, { target: { value: "5" } });
  fireEvent.click(calculateButton);

  const resultElement = screen.getByText("Result: 8");
  expect(resultElement).toBeInTheDocument();
});
