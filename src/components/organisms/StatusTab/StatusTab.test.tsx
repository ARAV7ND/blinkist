import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import StatusTab from "./StatusTab";

describe("checking the status tab", () => {
  test("cheking visibilty of  status tabs", () => {
    render(<StatusTab />);
    const statusTabs = screen.getByRole("tablist");
    expect(statusTabs).toBeTruthy();
    expect(statusTabs).toBeVisible();
  });

  test("cheking labels of tabs", async () => {
    render(<StatusTab />);
    const statusTabs = screen.getByRole("tablist");
    expect(statusTabs).toBeTruthy();
    expect(statusTabs).toBeVisible();
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toBeTruthy();
    expect(tabs.length).toBe(2);
    expect(tabs[0].textContent).toBe("Currently reading");
    expect(tabs[1].textContent).toBe("Finished");
  });

  test("cheking currently reading tab", async () => {
    render(<StatusTab />);
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
    render(<StatusTab />);
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
