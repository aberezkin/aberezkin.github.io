import styled, { css } from 'styled-components';

const Image = styled.img`
    ${props => props.rounded && css`
        border-radius: 5px;
    `}
`;

export default Image;
