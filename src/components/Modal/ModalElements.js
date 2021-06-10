import styled, { css } from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .7);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
`;

export const ModalCard = styled.div`
  width: 500px;
  background: rgba(0, 0, 0, .75);
  color: #fff;
  border: 1px solid #111;
  overflow: hidden;
  transition: 1.1s ease-out;
  box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
  visibility: visible;
`;

export const ModalCardTitle = styled.h2`
  border-bottom: 1px solid #333;
  padding: 1rem;
  margin: 0;
`;

export const ModalCardContent = styled.div`
  padding: 1rem;
`;

export const ModalCardActions = styled.div`
  border-top: 1px solid #333;
  background: transparent;
  padding: 0.5rem 1rem;
  text-align: right;
`;

export const ModalCardActionsButton = styled.button`
  border: none;
  background: #ffc500;
  color: #000;
  padding: .75rem 1.5rem;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  margin-left: .5rem;

  ${props => props.primary && css`
    background: #e31837;
    color: #fff;
  `}
`;