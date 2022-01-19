import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import React from "react";
import BookCard from "./BookCard";
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
const MockBookCard = () => {
  return (
    <BrowserRouter>
      <BookCard book={tempBook} handleClick={mockHandleClick} visible={true} />
    </BrowserRouter>
  );
};

describe("checking the Book Card", () => {
  test("Checking the book Typography", () => {
    render(<MockBookCard />);
    expect(screen.getByText("steve jobs")).toBeInTheDocument();
    expect(screen.getByText("Walter Isaacson")).toBeInTheDocument();
    expect(screen.getByText("12 minutes read")).toBeInTheDocument();
  });

  test("Checking the Button", () => {
    render(<MockBookCard />);
    const actionButton = screen.getByRole("button");
    expect(actionButton).toBeTruthy();
  });

  test("Checking the Event", () => {
    render(<MockBookCard />);
    const addToLibraryButton = screen.getByRole("button");
    fireEvent.click(addToLibraryButton);
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });
});
