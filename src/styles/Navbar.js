import styled from "styled-components";
import { media } from './styled-utils';



export const InputContainer = styled.div`
  display: -ms-flexbox; 
  display: flex;
  color: black;
  width: 80%;
  left:10%;
  margin: 0 auto;
  position:fixed;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  ${media.handheld`
    width: 100%;
    left:0;
  `};
`;
export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  font-size: 20px;
  :focus {
    border: 2px solid grey;
  }
`;
