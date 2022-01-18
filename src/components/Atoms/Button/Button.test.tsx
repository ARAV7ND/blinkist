import { fireEvent, render, screen } from "@testing-library/react";
import CustomButton from "./Button";

const mockHandleClick = jest.fn();
describe("Custom Button", () => {
  test("checking the role & visibilty", () => {
    render(
      <CustomButton
        label='submit'
        variant='contained'
        color='primary'
        handleClick={mockHandleClick}
      />
    );
    const customButton = screen.getByRole("button");
    expect(customButton).toBeTruthy();
    expect(customButton).toBeVisible();
  });
  
  test("checking the label", () => {
    render(
      <CustomButton
        label='submit'
        variant='contained'
        color='primary'
        handleClick={mockHandleClick}
      />
    );
    const customButton = screen.getByRole("button");
    expect(customButton.textContent).toContain("submit");
  });

  test("checking the event", () => {
    render(
      <CustomButton
        label='submit'
        variant='contained'
        color='primary'
        handleClick={mockHandleClick}
      />
    );
    const customButton = screen.getByRole("button");
    fireEvent.click(customButton);
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });
});
