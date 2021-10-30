import styled, { css } from "styled-components";

export const buttonCss = css`
  border: none;
  font-weight: 600;
  color: ${(props) => props.theme.colors.dark};
  background-color: ${(props) => props.theme.colors.light};
  max-width: 200px;
  min-width: 200px;
  border-radius: 0.5rem;
  text-transform: uppercase;
  font-size: 1.15rem;
  padding: 2rem 0.rem;
  pointer-events: auto;
  cursor: pointer;
  margin-bottom: 32px;
  :hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.15) 0 0);
  }
`;
const StyledButton = styled.button`
  ${buttonCss}
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
`;

export default StyledButton;
