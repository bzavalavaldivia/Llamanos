import styled from "styled-components";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

export const CarouselContainer = styled.div`
  background: #000;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarouselPrevButton = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;
  color: #fff;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
  box-shadow: 0 0 15px #000;
`;

export const CarouselNextButton = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: #fff;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
  box-shadow: 0 0 15px #000;
`;

export const CarouselItem = styled.div`
  position: absolute;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  width: calc(100vw - 126px);
  height: calc(100vh - 57px);
  color: #fff;
  padding: 0rem calc((100vw - 1300px) / 2);
  ${({ active }) => active ?
  `
  opacity: 1;
  transition-duration: 1s;
  transform: scale(1.08);
  `
  :
  `
  opacity: 0;
  transition-duration: 1s ease;
  `
  }
`;

export const CorouselItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 7rem 2rem 0 0;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const CarouselItemTitle = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  border-bottom: 5px solid #e9ba23;
  letter-spacing: 3px;
`;

export const CarouselItemDescription = styled.p`
  font-size: clamp(1.5rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;