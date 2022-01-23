import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("cheking home page", () => {
  test("cheking Heading", () => {
    render(<HomePage />);
    const homePage = screen.getByTestId("home-page");
    expect(homePage).toBeTruthy();
    expect(homePage).toBeVisible();
    expect(homePage.textContent).toContain("My Library");
  });
  test("cheking currently reading tab", async () => {
    render(<HomePage />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs[0]).toBeTruthy();
    fireEvent.click(tabs[0]);
    const tabPanel = screen.getByRole("tabpanel");
    expect(tabPanel).toBeTruthy();
    expect(tabPanel).toBeVisible();
    expect(tabPanel.id).toContain("currently-reading");
    const grid = screen.getByTestId("card-grid");
    expect(grid).toBeVisible();
  });
  test("cheking finished tab", async () => {
    render(<HomePage />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs[1]).toBeTruthy();
    fireEvent.click(tabs[1]);
    const tabPanel = screen.getByRole("tabpanel");
    expect(tabPanel).toBeTruthy();
    expect(tabPanel).toBeVisible();
    expect(tabPanel.id).toContain("finish");
    const grid = screen.getByTestId("card-grid");
    expect(grid).toBeVisible();
  });
});
