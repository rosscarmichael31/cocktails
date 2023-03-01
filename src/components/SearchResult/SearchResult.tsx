import { Drink, RecipeCard } from "../../types";
import s from "./SearchResult.styles";

interface Props {
  drink: Drink;
  onToggleDrink(toggleDrinkValue: RecipeCard): void;
}

export const SearchResult: React.FC<Props> = ({ drink, onToggleDrink }) => {
  const handleClick = () => {
    const measurements: string[] = Object.keys(drink)
      .filter(
        (key) =>
          drink[key as keyof Drink] &&
          drink[key as keyof Drink] !== null &&
          drink[key as keyof Drink] !== undefined &&
          key.startsWith("strMeasure")
      )
      .map((key) => drink[key as keyof Drink]!);

    const ingredients: string[] = Object.keys(drink)
      .filter(
        (key) =>
          drink[key as keyof Drink] &&
          drink[key as keyof Drink] !== null &&
          drink[key as keyof Drink] !== undefined &&
          key.startsWith("strIngredient")
      )
      .map((key) => drink[key as keyof Drink]!);

    onToggleDrink({
      name: drink.strDrink,
      thumbnail: drink.strDrinkThumb,
      ingredients: ingredients,
      measures: measurements,
      method: drink.strInstructions,
    });
  };

  return (
    <s.SearchResult data-testid="search-result" onClick={handleClick}>
      <s.ThumbnailContainer>
        <s.Thumbnail src={drink.strDrinkThumb} alt="" />
      </s.ThumbnailContainer>
      <s.CocktailInformation>
        <s.Name>{drink.strDrink}</s.Name>
        {drink.strTags?.split(",").map((tag) => (
          <s.Tag key={tag}>{tag}</s.Tag>
        ))}
      </s.CocktailInformation>
    </s.SearchResult>
  );
};
