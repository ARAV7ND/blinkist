import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
describe("cheking App", () => {
  test("cheking visibilty", () => {
    render(<App />);
    const app = screen.getByTestId("app");
    expect(app).toBeTruthy();
    expect(app).toBeVisible();
  });
});
