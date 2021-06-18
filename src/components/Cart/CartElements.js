import styled, { css } from 'styled-components';

export const CartContainer = styled.div`
  background: #150f0f;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const CartContent = styled.div`
  display: flex;
  flex-warp: wrap;
  margin-right: 0;
  margin-left: 0;
  justify-content: center;
`;

export const CartColumn = styled.div`
  padding: 1rem;
  ${({ col }) => {
    switch (col) {
      case 9:
        return `
        flex: 0 0 75%;
        max-width: 75%;
        `

      case 3:
        return `
        flex: 0 0 25%;
        max-width: 25%;
        `

      default:
        return `
        flex: 0 0 25%;
        max-width: 25%;
        `
    }
  }}
`;

export const CartCheackoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #0d0909;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
  color: #fff;
  text-align: right;
`;

export const CartButtonContainer = styled.div`
  text-align: center;
`;

export const CartButton = styled.button`
  border: none;
  background: #ffc500;
  color: #000;
  padding: .75rem 1.5rem;
  font-size: .75rem;
  line-height: 1;
  cursor: pointer;
  margin-left: .5rem;
  ${props => props.primary && css`
    background: #e31837;
    color: #fff;
  `}
`;

export const CartDivider = styled.hr`
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  margin-right: 0;
  margin-left: 0;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: 0;
  border-top: 1px solid rgba(0,0,0,.1);
`;

export const CartEmpty = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
`;