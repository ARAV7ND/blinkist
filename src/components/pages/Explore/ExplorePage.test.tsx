import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import ExplorePage from "./ExplorePage";

describe("Explore page", () => {
  test("checking the explore page", async () => {
    render(<ExplorePage />);
    const explorePage = screen.getByTestId("explore-page");
    expect(explorePage).toBeTruthy();
    expect(explorePage).toBeVisible();
    const searchInput = await screen.findByTestId("search-input");
    expect(searchInput).toBeVisible();
    const cardGrid = await screen.findByTestId("card-grid");
    expect(cardGrid).toBeVisible();
  });

  test("checking search Bar", async () => {
    render(<ExplorePage />);
    const explorePage = screen.getByTestId("explore-page");
    expect(explorePage).toBeTruthy();
    expect(explorePage).toBeVisible();
    const searchInput = await screen.findByTestId("search-input");
    expect(searchInput).toBeVisible();
    const inputField = screen.getByPlaceholderText("Search by title or author");
    fireEvent.change(inputField, {
      target: { value: "Beyond Entrepreneurship" },
    });
    fireEvent.change(inputField, { target: { value: "" } });
  });
  //   test("checking Add to library button", () => {
  //     render(<ExplorePage />);
  //     const explorePage = screen.getByTestId("explore-page");
  //     expect(explorePage).toBeTruthy();
  //     expect(explorePage).toBeVisible();
  //     const addToLibraryBtn = screen.getAllByRole("button");
  //     expect(addToLibraryBtn.length).toBeTruthy();
  //   });
});
