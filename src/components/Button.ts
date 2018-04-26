import styled from "styled-components";

const Button = styled.button`
  display: inline-flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex: 0 1 auto;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: middle;
  transition: .3s background-color,border-color,color ease;
  cursor: pointer;
  min-width: 120px;
  outline: 0;
  border: 3px solid;
  font-size: 14px;
  border-radius: 6px;
  font-weight: 600;
  padding: 0.5em 1em;
  &:active {
    outline: 0;
  }
`;

export default Button;
