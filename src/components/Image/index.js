import styled, { css } from 'styled-components';

const Image = styled.img`
  object-fit: cover;

  ${props => props.rounded && css`
    border-radius: 5px;
  `}
  
  ${props => props.circle && css`
    border-radius: 100%;
  `}
  
  ${props => props.xsmall && css`
    width: 32px;
    height: 32px;
  `}
  
  ${props => props.small && css`
    width: 48px;
    height: 48px;
  `}
  
  ${props => props.medium && css`
    width: 126px;
    height: 126px;
  `}
  
  ${props => props.large && css`
    width: 256px;
    height: 256px;
  `}
  
  ${props => props.filling && css`
    max-width: 100%;
    max-height: 100%;
  `}
`;

export default Image;
