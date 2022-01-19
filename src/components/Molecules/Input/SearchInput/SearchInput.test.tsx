import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";
import "@testing-library/jest-dom";

const mockedHandleChange = jest.fn();

describe("Search Bar", () => {
  test("checking visibilty of the search Bar", () => {
    render(<SearchInput onChange={mockedHandleChange} />);
    const searchInput = screen.getByTestId("searchBar");
    expect(searchInput).toBeTruthy();
    expect(searchInput).toBeVisible();
  });
  test("checking visibilty of the place holder", () => {
    render(<SearchInput onChange={mockedHandleChange} />);
    const inputField = screen.getByPlaceholderText("Search by title or author");
    expect(inputField).toBeTruthy();
    expect(inputField).toBeVisible();
  });

  test("checking onchange event", () => {
    render(<SearchInput onChange={mockedHandleChange} />);

    const inputElement = screen.getByPlaceholderText(
      "Search by title or author"
    );
    fireEvent.change(inputElement, { target: { value: "steve jobs" } });
  });
});
