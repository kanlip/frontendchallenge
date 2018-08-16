import styled from "styled-components";
import { media } from "./styled-utils";

export const Container = styled.div`
  display: grid;
  /* Display as a Grid */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-content: space-around;
  grid-gap: 20px;
  color: #fff;
  ${media.handheld`
  
  `};
`;
export const Card = styled.div`
  word-wrap: break-word;
  margin: 10px;
  color: black;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;
  height: 300px;
  &::after {
    border-radius: 5px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    -webkit-transform: scale(1.25, 1.25);
    transform: scale(1.1, 1);
  }
  ${media.handheld`
      width: 100%;
      left:0;
      margin:0;
      &:hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        -webkit-transform: scale(1.25, 1.25);
        transform: scale(1, 1);
      } 
    `};
`;

export const Button = styled.button`
  border-radius: 4px;
  background-color: red;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 10px;
  & > span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }
  & > span::after {
    content: "\00bb";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }
  &:hover span {
    padding-right: 25px;
  }
  &:hover span::after {
    opacity: 1;
    right: 0;
  }
`;
export const DivFollow = styled.div`
  margin: 30px;
`;
export const DivChild = styled.div`
  text-align: center;
  justify-self: center;
  align-content: center;
`;
export const Img = styled.img`
  border-radius: 30px;

  width: 100%;
  height: 100%;
  ${media.handheld`
    display: block;   
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    `};
`;
