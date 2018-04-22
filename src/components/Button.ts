import styled from "styled-components";

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex: 0 1 auto;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: middle;
  transition: .3s cubic-bezier(.25,.8,.5,1),color 1ms;
  cursor: pointer;
  min-width: 88px;
  outline: 0;
  border-radius: 20px;
  font-weight: 500;
  border-width: 0px;
  height: 36px;
  margin: 6px 8px;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
`;

export default Button;
