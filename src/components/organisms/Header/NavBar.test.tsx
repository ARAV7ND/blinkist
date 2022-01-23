import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import NavBar from "./NavBar";
const MockNavBar = () => {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
};

describe("checking NavBar", () => {
  test("checking NavBar visibilty", () => {
    render(<MockNavBar />);
    const navBar = screen.getByTestId("nav-bar");
    expect(navBar).toBeVisible();
    expect(navBar).toBeInTheDocument();
  });

  test("checking logo click", () => {
    render(<MockNavBar />);
    const navBar = screen.getByTestId("nav-bar");
    expect(navBar).toBeVisible();
    expect(navBar).toBeInTheDocument();
    const brandLogo = screen.getByTestId("brand-logo");
    fireEvent.click(brandLogo);
    expect(window.location.pathname).toBe("/library");
  });

  test("cheking search logo", () => {
    render(<MockNavBar />);
    const searchIcon = screen.getByTestId("search-icon");
    expect(searchIcon).toBeVisible();
    expect(searchIcon).toBeInTheDocument();
    fireEvent.click(searchIcon);
  });

  test("Checking explore button", () => {
    render(<MockNavBar />);
    const exploreBtn = screen.getByTestId("explore-btn");
    expect(exploreBtn).toBeTruthy();
    expect(exploreBtn).toBeVisible();
    expect(exploreBtn.textContent).toBe("Explore");
    fireEvent.click(exploreBtn);
    const exploreMenu = screen.getByRole("menu");
    expect(exploreMenu).toBeInTheDocument();
  });
  test("checking my library button", () => {
    render(<MockNavBar />);
    const myLibraryBtn = screen.getByTestId("myLibrary-btn");
    expect(myLibraryBtn).toBeTruthy();
    expect(myLibraryBtn).toBeVisible();
    expect(myLibraryBtn.textContent).toBe("My Library");
    fireEvent.click(myLibraryBtn);
    expect(window.location.pathname).toBe("/library");
  });
});
