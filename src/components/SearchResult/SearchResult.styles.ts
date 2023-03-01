import styled from "styled-components";

const SearchResult = styled.div`
  background-color: #eee;
  padding: 1em;
  margin: 1em auto;
  display: flex;
  align-items: center;
  width: 750px;
`;

const ThumbnailContainer = styled.div``;

const CocktailInformation = styled.div``;

const Name = styled.div``;

const Thumbnail = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  margin: 1em;
`;

const Tag = styled.div`
  font-size: 0.8em;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5em;
  margin: 0.5em;
  display: inline-block;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const styles = {
  SearchResult,
  Name,
  Thumbnail,
  Tag,
  ThumbnailContainer,
  CocktailInformation,
};
export default styles;
