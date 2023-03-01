import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 400px;
`;
const Modal = styled.div`
  position: relative;
  width: 400px;
  background-color: white;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  padding: 2rem;
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;
const Method = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-bottom: 1rem;
`;
const ListItem = styled.li`
  font-size: 1.25rem;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const styles = {
  ModalContainer,
  Modal,
  Title,
  Image,
  Method,
  List,
  ListItem,
  CloseButton,
};

export default styles;
