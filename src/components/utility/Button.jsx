import styled from 'styled-components';

const StyledButton = styled.button`
  border-style: none;
  background-color: ${props => props.bgColor || "var(--primary)"};
  font-family: "Quicksand",monospace;
  font-size: 1rem;
  font-weight: bold;
  color: ${props => props.textColor || "var(--light)"};
  border-radius: 15px;
  width: 130px;
  height: 50px;
  padding: .5em;
  cursor: pointer;
  box-shadow: 5px 5px 10px black, -2px -2px 10px ${props => props.bgColor || "var(--primary)"};
`;

export default StyledButton;