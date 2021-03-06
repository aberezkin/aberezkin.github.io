import styled, { css } from 'styled-components';

const Title = styled.div`
  font-size: 2em;
  margin-bottom: 16px;

  ${props => props.large && css`
    line-height: 59px;
    font-size: 3em;
  `}
  
  ${props => props.sub && css`
    font-size: 1.35em;
  `}
  
  ${props => props.bold && css`
    font-weight: 600;
  `}
`;

export default Title;
