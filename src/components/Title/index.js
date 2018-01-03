import styled, { css } from 'styled-components';

const Title = styled.div`
    font-size: 2em;
    margin-bottom: 16px;
    
    ${props => props.sub && css`
        font-size: 1em;
    `}
    
    ${props => props.bold && css`
        font-weight: 600;
    `}
`;

export default Title;
