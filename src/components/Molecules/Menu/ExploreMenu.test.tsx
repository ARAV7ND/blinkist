import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ExploreMenu from "./ExploreMenu";
import "@testing-library/jest-dom";
const mockHandleMenu = jest.fn();

const ExploreMenuDropDown = () => {
  return (
    <BrowserRouter>
      <ExploreMenu handleMouseOut={mockHandleMenu} />
    </BrowserRouter>
  );
};
describe("checking ExploreMenu", () => {
  test("checking visibilty", () => {
    render(<ExploreMenuDropDown />);
    const exploreMenu = screen.getByTestId("explore-menu");
    expect(exploreMenu).toBeVisible();
  });

  test("checking routing on menu item", () => {
    render(<ExploreMenuDropDown />);
    const exploreMenu = screen.getByTestId("explore-menu");
    expect(exploreMenu).toBeVisible();
    const entrepreneurshipCategory = screen.getByText("Entrepreneurship");
    fireEvent.click(entrepreneurshipCategory);
    expect(window.location.pathname).toBe("/explore/Entrepreneurship");
  });
});
