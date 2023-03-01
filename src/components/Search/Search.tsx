import { useRef } from "react";
import s from "./Search.styles";

interface Props {
  onSearch(query: string): void;
}

export const Search: React.FC<Props> = ({ onSearch }) => {
  const searchInput = useRef<HTMLInputElement>(null);

  const handleButtonPress = () => {
    const query = searchInput.current?.value.trim();
    if (query) {
      onSearch(query);
    }
  };

  return (
    <s.SearchContainer>
      <input
        type="text"
        ref={searchInput}
        placeholder="Search for a cocktail"
      />
      <button aria-label="search" onClick={handleButtonPress}>
        <span className="material-symbols-outlined">search</span>
      </button>
    </s.SearchContainer>
  );
};
