import styled, { css } from "styled-components";

export const media = {
  handheld: (...args) => css`
    @media (max-width: 420px) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 420px) and (max-width: 900px) {
      ${css(...args)};
    }
  `
};
export const DivCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  height: 100px;
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
    transform: scale(1.2, 1);
  }
  ${media.handheld`
      width: 100%;
      left: 0;
      top:10%;
      &:hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        -webkit-transform: scale(1.25, 1.25);
        transform: scale(1, 1);
      } 
    `};
`;

export const DivBody = styled.div`
  position: absolute;
  width: 80%;
  top: 7%;
  left: 10%;
  ${media.handheld`
      width: 100%;
      left: 0;
      top:10%;
    `};
`;

export const DivCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 100px;
  height: 100px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
