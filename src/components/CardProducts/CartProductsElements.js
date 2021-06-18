import styled from 'styled-components';
import { FaMinusSquare, FaPlusSquare, FaTrashAlt } from 'react-icons/fa';

export const CartProductsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 300px;
  word-wrap: break-word;
  background-color: #0d0909;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  flex: 1 1 auto;
  padding: 1.25rem;
  border: 0;
  color: #fff;
`;

export const CartProductsItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 0;
  margin-left: 0;
  padding-top: .5rem;
  padding-bottom: .5rem;
`;

export const CartProductsItemColumn = styled.div`
  padding: .5rem;
  flex: 0 0 25%;
  max-width: 25%;
  text-align: ${({ text }) => text || 'left'}
`;

export const ProductImage = styled.img`
  width: 100px;
  max-height: 50px;
  object-fit: cover;
`;

export const IncreaseButton = styled(FaPlusSquare)`
  color: #e31837;
  font-size: 1.25rem;
  margin-left: .5rem;
`;

export const DecreaseButton = styled(FaMinusSquare)`
  color: #ffc500;
  font-size: 1.25rem;
  margin-left: .5rem;
`;

export const RemoveButton = styled(FaTrashAlt)`
  color: #ffc500;
  font-size: 1.25rem;
  margin-left: .5rem;
`;