import styled, { css } from 'styled-components';

const Frame = styled.div`
  display: inline-block;
  background: #fff;
  
  padding: 12px 5px 10px 5px;
  border-radius: 20px;
  box-shadow: 0px 10px 64px -6px rgba(0,0,0,0.75);
  max-width: 100%;
  margin-bottom: 36px;
  
  
  ${({ browser }) => browser && css`
    padding: 20px 0px 0px 0px;
    border-radius: 5px 5px 0 0;
  `}
`;

export default Frame;
