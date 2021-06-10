import styled from "styled-components";
import cover from '../../images/cover.jpg';

export const CoverContainer = styled.div`
  position: relative;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${cover});
  height: 350px;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export const CoverContent = styled.div`
  margin-top: 195px;
  color: #fff;
`;

export const CoverTitle = styled.h1`
  font-size: clamp(1.25rem, 5vw, 2.5rem);
  margin-bottom: 1rem;
  box-shadow: 0 5px #e9ba23;
  letter-spacing: 3px;
`;