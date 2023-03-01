import { render, screen } from "@testing-library/react";
import { App } from "./App";
import * as useGetHook from "./hooks/useGet";
import { Drink } from "./types";

const MOCK_COCKTAIL: Drink = {
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

test("It renders loading information", () => {
  jest
    .spyOn(useGetHook, "useGet")
    .mockReturnValue({ loading: true, data: [MOCK_COCKTAIL], error: false });
  render(<App />);

  const loadingMessage = screen.getByText("Loading");

  expect(loadingMessage).toBeInTheDocument();
});

test("It renders error information", () => {
  jest
    .spyOn(useGetHook, "useGet")
    .mockReturnValue({ loading: false, data: [MOCK_COCKTAIL], error: true });
  render(<App />);

  const errorMessgae = screen.getByText(
    "There has been an error! Please try again."
  );

  expect(errorMessgae).toBeInTheDocument();
});

test("It renders the correct information", () => {
  jest
    .spyOn(useGetHook, "useGet")
    .mockReturnValue({ loading: false, data: [MOCK_COCKTAIL], error: false });
  render(<App />);

  const displayedCocktailsMessage = screen.getByText(MOCK_COCKTAIL.strDrink);

  expect(displayedCocktailsMessage).toBeInTheDocument();
});
