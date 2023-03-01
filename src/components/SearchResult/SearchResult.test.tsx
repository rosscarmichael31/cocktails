import { fireEvent, render } from "@testing-library/react";
import { Drink } from "../../types";
import { SearchResult } from "./SearchResult";
import { screen } from "@testing-library/react";

const mockCocktail: Drink = {
  idDrink: "mock-id",
  strDrink: "mock-name",
  strTags: "mock-tags",
  strVideo: "mock-video",
  strCategory: "mock-category",
  strIBA: "mock-IBA",
  strAlcoholic: "mock-alcoholic",
  strGlass: "mock-glass",
  strInstructions: "mock-instructions",
  strInstructionsDE: "mock_instructionsDE",
  strInstructionsIT: "mock_instructionsIT",
  strDrinkThumb: "mock_",
  strIngredient1: "mock_ingredient1",
  strIngredient2: "mock_ingredient2",
  strIngredient3: "mock_ingredient3",
  strIngredient4: "mock_ingredient4",
  strMeasure1: "mock_measure1",
  strMeasure2: "mock_measure2",
  strMeasure3: "mock_measure3",
  strMeasure4: "mock_measure4",
  strImageSource: "mock_img",
  strImageAttribution: "mock_img_attrs",
  strCreativeCommonsConfirmed: "mock_ccc",
  dateModified: "mock_date",
};

const mockOnClick = jest.fn();

test("It renders the expected result", () => {
  render(<SearchResult drink={mockCocktail} onToggleDrink={mockOnClick} />);
  const searchResultDiv = screen.getByTestId("search-result");

  expect(searchResultDiv).toHaveTextContent(mockCocktail.strDrink);
});

test("It handles a click", () => {
  render(<SearchResult drink={mockCocktail} onToggleDrink={mockOnClick} />);
  const searchResultDiv = screen.getByTestId("search-result");
  fireEvent.click(searchResultDiv);

  expect(mockOnClick).toHaveBeenCalledTimes(1);
});
