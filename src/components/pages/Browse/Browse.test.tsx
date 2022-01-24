import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import "@testing-library/jest-dom";

const mockHandleClick = jest.fn();
const tempBook = {
  id: 20,
  title: "steve jobs",
  author: "Walter Isaacson",
  image:
    "https://images.blinkist.com/images/books/608a9c296cee070007228a21/1_1/470.jpg",
  time: "12",
  category: "Biography",
  status: true,
  isFinished: false,
};
const BrowseBook = () => {
  return (
    <BrowserRouter>
      <Browse />
    </BrowserRouter>
  );
};
describe("Browse Book", () => {
  test("checking visibity", () => {
    render(<BrowseBook />);
    const browseBook = screen.getByTestId("browse-book");
    expect(browseBook).toBeVisible();
  });

  test("checking book details", () => {
    render(<BrowseBook />);
    const browseBook = screen.getByTestId("browse-book");
    expect(browseBook).toBeVisible();
    expect(browseBook.textContent).toContain(
      "Turning Your Business into an Enduring Great Company"
    );
    // expect(browseBook.textContent).toContain("Beyond Entrepreneurship 2.0");
    // expect(browseBook.textContent).toContain("15 minutes read");
  });

  test("checking events/actions", () => {
    render(<BrowseBook />);
    const browseBook = screen.getByTestId("browse-book");
    expect(browseBook).toBeVisible();
    const readNowButton = screen.getByTestId("read-now");
    expect(readNowButton).toBeTruthy();
    fireEvent.click(readNowButton);
  });

  test("checking the tabs label", () => {
    render(<BrowseBook />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs.length).toBe(3);
    expect(tabs[0].textContent).toBe("Synopsis");
    expect(tabs[1].textContent).toBe("Who is it for?");
    expect(tabs[2].textContent).toBe("About the author");
  });

  test("checking the tab panel", () => {
    render(<BrowseBook />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs.length).toBe(3);
    expect(tabs[0].textContent).toBe("Synopsis");
    expect(tabs[1].textContent).toBe("Who is it for?");
    expect(tabs[2].textContent).toBe("About the author");
    const tabPanel = screen.getAllByRole("tabpanel");
    expect(tabPanel.length).toBe(1);
    fireEvent.click(tabs[0]);
    const tabPanelOne = screen.getByRole("tabpanel");
    expect(tabPanelOne.textContent).toContain(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Illum tempore porro quam voluptatum id eaque! Magnam similique fugit voluptas aliquam impedit? Alias saepe consequuntur iure beatae odit doloribus molestias veniam!"
    );
    fireEvent.click(tabs[1]);
    const tabPanelTwo = screen.getByRole("tabpanel");
    expect(tabPanelTwo.textContent).toContain(
      "Illum tempore porro quam voluptatum id eaque! Illum tempore porro quam voluptatum id eaque! Illum tempore porro quam voluptatum id eaque!"
    );
    fireEvent.click(tabs[2]);
    const tabPanelThree = screen.getByRole("tabpanel");
    expect(tabPanelThree.textContent).toContain(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Illum tempore porro quam voluptatum id eaque! Magnam similique fugit voluptas aliquam impedit? Alias saepe consequuntur iure beatae odit doloribus molestias veniam!"
    );
  });
});
