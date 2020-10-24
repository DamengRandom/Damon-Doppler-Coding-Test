import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.img.attrs(props => ({
  style: {
    WebkitFilter: `opacity(1) drop-shadow(0 0 0 ${props.velocity === 0 || props.error ? 'white' : props.color})`,
    filter: `opacity(1) drop-shadow(0 0 0 ${props.velocity === 0 || props.error ? 'white' : props.color})`
  }
}))`
  border: none;
  box-sizing: border-box;

  @media only screen and (max-width: 481px) {
    width: 100%;
  }
`;

export default function Image({ imgUrl, altText, color, velocity, error }) {
  return (
    <ImageWrapper 
      data-testid={altText}
      id={altText}
      src={imgUrl}
      alt={altText}
      color={color}
      velocity={velocity}
      error={error.message}
    />
  )
};
