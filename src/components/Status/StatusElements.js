import styled from "styled-components";

export const StatusContainer = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, .6);
  width: 100%;
  height: 27px;
  padding: .4rem;
  font-size: 12px;
  top 0;
  border-bottom: 1px solid #666;
  z-index: 1;
`;

export const StatusContent = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
`;