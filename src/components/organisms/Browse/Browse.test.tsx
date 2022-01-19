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
  status: false,
  isFinished: false,
};
const BrowseBook = () => {
  return (
    <BrowserRouter>
      <Browse book={tempBook} handleAddTolibrary={mockHandleClick} />
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
    expect(screen.getByText("steve jobs")).toBeInTheDocument();
    expect(screen.getByText("12 minutes read")).toBeInTheDocument();
  });

  test("checking events/actions", () => {
    render(<BrowseBook />);
    const browseBook = screen.getByTestId("browse-book");
    expect(browseBook).toBeVisible();
    const actionButton = screen.getByTestId("read-now");
    fireEvent.click(actionButton);
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });
});
