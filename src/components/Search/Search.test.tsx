import { fireEvent, render, screen } from "@testing-library/react";
import { Search } from "./Search";

test("It handles a click", () => {
  const mockOnSearch = jest.fn();

  render(<Search onSearch={mockOnSearch} />);

  const searchButton = screen.getByLabelText("search");
  const inputField = screen.getByPlaceholderText("Search for a cocktail");

  fireEvent.change(inputField, { target: { value: "query" } });
  fireEvent.click(searchButton);

  expect(mockOnSearch).toHaveBeenCalledTimes(1);
});
