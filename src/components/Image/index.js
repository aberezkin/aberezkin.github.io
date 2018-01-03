import styled, { css } from 'styled-components';

const Image = styled.img`
    object-fit: cover;

    ${props => props.rounded && css`
        border-radius: 5px;
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
    
    ${props => props.fill && css`
        max-width: 100%;
        max-height: 100%;
    `}
`;

export default Image;
