import { useState } from "react";
import { Search } from "./components/Search/Search";
import { SearchResult } from "./components/SearchResult/SearchResult";
import { DrinksAPIResponse, Drink, RecipeCard } from "./types";
import s from "./App.styles";
import { Modal } from "./components/Modal/Modal";
import { useGet } from "./hooks/useGet";

const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

export const App = () => {
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [recipeCard, setRecipeCard] = useState<RecipeCard>({
    name: null,
    thumbnail: null,
    ingredients: null,
    measures: null,
    method: null,
  });

  const { loading, data, error } = useGet<DrinksAPIResponse>(url, searchQuery);
  console.log(data);

  // const drinks = data as any as DrinksAPIResponse;

  return (
    <s.Main>
      <h1>Cocktail HUT</h1>
      <Search onSearch={setSearchQuery} />
      {error && <p>There has been an error! Please try again.</p>}
      {loading && <p>Loading</p>}

      <h2>Matching cocktails</h2>

      {recipeCard.name && (
        <Modal onClose={setRecipeCard} recipeCardValue={recipeCard}></Modal>
      )}
      {data &&
        data.drinks.length > 0 &&
        data.drinks.map((drink) => (
          <SearchResult
            key={drink.idDrink}
            drink={drink}
            onToggleDrink={setRecipeCard}
          />
        ))}
    </s.Main>
  );
};
