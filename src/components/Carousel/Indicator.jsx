import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Pip = styled.span`
  background: white;
  display: inline-block;
  width: 50px;
  height: 4px;
  margin-right: 5px;
  opacity: ${props => ((props.isCurrent) ? 1 : 0.3)};
  transition: opacity .5s ease;
  cursor: pointer;
`;


const Indicator = ({ length, currentSlide }) => (
  <div>
    {
      Array.from({ length }, (pip, i) => (
        <Pip
          key={i}
          isCurrent={currentSlide === i}
        />
      ))
    }
  </div>
);

Indicator.propTypes = {
  length: PropTypes.number.isRequired,
  currentSlide: PropTypes.number.isRequired,
};

export default Indicator;
