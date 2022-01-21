import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import BookGrid from "./BookGrid";
import { text } from "node:stream/consumers";

const books = [
  {
    id: 1,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    time: "20",
    category: "Entrepreneurship",
    image:
      "https://images.blinkist.com/images/books/608a9c296cee070007228a21/1_1/470.jpg",
    status: false,
    isFinished: false,
  },
  {
    id: 2,
    title: "Dropshipping",
    author: "James Moore",
    time: "20",
    category: "Entrepreneurship",
    image:
      "https://images.blinkist.com/images/books/60701b716cee070008b8b7a1/1_1/470.jpg",
    status: true,
    isFinished: true,
  },
  {
    id: 6,
    title: "Forest Bathing",
    author: "Qing Li",
    time: "12",
    category: "Health",
    image:
      "https://images.blinkist.com/images/books/60950a3c6cee070007151f86/1_1/470.jpg",
    status: true,
    isFinished: true,
  },
];
interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  status: boolean;
  time: string;
  isFinished: boolean;
}
interface BookCardProps {
  bookList: Array<Book>;
  handleClick: (book: Book) => void;
}
const handleCardClick = (book: Book) => {
  console.log(book);
};
const MockBookGrid = ({ bookList, handleClick }: BookCardProps) => {
  return (
    <BrowserRouter>
      <BookGrid bookList={bookList} handleClick={handleClick} />
    </BrowserRouter>
  );
};

describe("checking the card Grid", () => {
  test("checking grid visibility", () => {
    render(<MockBookGrid bookList={books} handleClick={handleCardClick} />);
    const bookCard = screen.getByTestId("card-grid");
    expect(bookCard).toBeInTheDocument();
  });

  test("checking multiple books are rendered or not", () => {
    render(<MockBookGrid bookList={books} handleClick={handleCardClick} />);
    const bookCards = screen.getAllByTestId(/book-card/i);
    expect(bookCards).toBeTruthy();
    expect(bookCards.length).toBe(3);
  });
  test("checking buttons", () => {
    render(<MockBookGrid bookList={books} handleClick={handleCardClick} />);
    const addToLibraryButton = screen.getAllByRole("button");
    expect(addToLibraryButton.length).toBe(1);
  });
  test("checking events", () => {
    render(<MockBookGrid bookList={books} handleClick={handleCardClick} />);
    const addToLibraryButton = screen.getAllByRole("button");
    fireEvent.click(addToLibraryButton[0]);
  });
  test("checking progress bars", () => {
    render(<MockBookGrid bookList={books} handleClick={handleCardClick} />);
    const progressBars = screen.getAllByTestId(/progress-bar/i);
    expect(progressBars.length).toBe(2);
  });
});
