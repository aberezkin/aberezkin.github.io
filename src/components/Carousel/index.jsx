import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Swipeable from 'react-swipeable';
import { throttle } from 'lodash';
import Indicator from './Indicator';

// TODO: use it for testimonials

const CarouselContainer = styled.div`
  display: flex;
  margin: 0 0 20px 0;
  transition: ${({ isSliding }) => (isSliding ? 'none' : 'transform .7s cubic-bezier(0.77, 0, 0.175, 1)')};
  transform: ${({ isSliding, direction }) => {
    if (!isSliding) return 'translateX(calc(-100%))';
    if (direction === -1) return 'translateX(calc(2 * (-100%)))';
    return 'translateX(calc(0%))';
  }};
`;

const Slide = styled.div`
  flex: 1 0 100%;
  order: ${({ order }) => order};
  opacity: ${({ order }) => (order === 1 ? 1 : 0.3)};
  transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1);
`;

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const mod = (a, b) => (a >= 0 ? a % b : (b + a));

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      isSliding: false,
      direction: 1,
    };
  }

  getOrder = (itemIndex) => {
    const { currentSlide } = this.state;
    const { children } = this.props;
    const itemsCount = children.length || 1;

    return mod((itemIndex - currentSlide) + 1, itemsCount);
  };

  moveSlide = direction => () => {
    const { currentSlide } = this.state;
    const { children } = this.props;
    const itemsCount = children.length || 1;

    this.setState({
      currentSlide: mod(currentSlide + direction, itemsCount),
      direction,
    });

    this.doSliding();
  };

  doSliding = () => {
    this.setState({
      isSliding: true,
    });

    setTimeout(() => {
      this.setState({
        isSliding: false,
      });
    }, 50);
  };

  swipeLeft = throttle(this.moveSlide(1), 1000, { trailing: false });
  swipeRight = throttle(this.moveSlide(-1), 1000, { trailing: false });

  render() {
    const { children } = this.props;
    const { currentSlide } = this.state;

    return (
      <div>
        <Swipeable
          onSwipingLeft={this.swipeLeft}
          onSwipingRight={this.swipeRight}
        >
          <Wrapper>
            <CarouselContainer
              isSliding={this.state.isSliding}
              direction={this.state.direction}
            >
              {
                children.map((slide, i) => (
                  <Slide key={i} order={this.getOrder(i)}>
                    {slide}
                  </Slide>
                ))
              }
            </CarouselContainer>
          </Wrapper>
        </Swipeable>
        <Indicator
          length={children.length}
          currentSlide={currentSlide}
        />
      </div>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Carousel;
