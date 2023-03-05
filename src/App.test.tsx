import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header properly", () => {
  render(<App />);

  const header = screen.getByRole("heading");
  expect(header).toContainHTML('<img src="logo.png" alt="logo" />');
});
