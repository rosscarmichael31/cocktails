import { RecipeCard } from "../../types";
import s from "./Modal.styles";

interface Props {
  onClose(recipeCardValue: RecipeCard): void;
  recipeCardValue: RecipeCard;
}

export const Modal: React.FC<Props> = ({ onClose, recipeCardValue }) => {
  const handleClick = () => {
    onClose({
      name: null,
      thumbnail: null,
      ingredients: null,
      measures: null,
      method: null,
    });
  };

  return (
    <s.ModalContainer onClick={handleClick}>
      <s.Modal>
        <s.CloseButton onClick={handleClick}>&times;</s.CloseButton>
        <s.Title>{recipeCardValue.name}</s.Title>
        <s.Image src={recipeCardValue.thumbnail!} alt={recipeCardValue.name!} />
        <s.Method>Method: {recipeCardValue.method}</s.Method>
        <s.List>
          {recipeCardValue.ingredients?.map((ingredient, index) => (
            <s.ListItem key={ingredient}>
              {ingredient} - {recipeCardValue.measures![index]}
            </s.ListItem>
          ))}
        </s.List>
      </s.Modal>
    </s.ModalContainer>
  );
};

export default Modal;
