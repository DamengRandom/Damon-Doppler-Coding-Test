import React from 'react';
import styled from 'styled-components';

const VelocitySliderBarWrapper = styled.input`
  width: 280px;
  -webkit-appearance: none;
  height: 10px;
  border-radius: 5px;
  background: #ddd;
  outline: none;
  padding: 0;
  margin: 0;
  pointer-events: none;

  // Slider Range Styling
  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: grey;
    cursor: pointer;
    transition: background .2s ease-in-out;
    pointer-events: auto;

    &:hover {
      pointer-events: auto;
      background: ${props => props.velocity === '0' ? 'grey' : props.color};
    }
  }

  &:active::-webkit-slider-thumb {
    pointer-events: auto;
    background: ${props => props.velocity === '0' ? 'grey' : props.color};
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: 50%;
    background: grey;
    cursor: pointer;
    transition: background .2s ease-in-out;
    pointer-events: auto;

    &:hover {
      pointer-events: auto;
      background: ${props => props.velocity === '0' ? 'grey' : props.color};
    }
  }

  &:active::-moz-range-thumb {
    pointer-events: auto;
    background: ${props => props.velocity === '0' ? 'grey' : props.color};
  }
`;

const SliderValueWrapper = styled.span`
  display: block;
  color: ${props => props.velocity === '0' || props.error ? 'black' : props.color};
  line-height: 20px;
  padding-top: 20px;
`;

export default function Slider({
  id,
  type,
  min,
  max,
  step,
  handleChange,
  value,
  mouseEvent,
  color,
  velocity,
  error
}) {
  return (
    <div className="velocity-slider">
      <VelocitySliderBarWrapper
        id={id}
        type={type}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        value={value}
        onMouseLeave={mouseEvent}
        color={color}
        velocity={velocity}
      />
      <SliderValueWrapper
        color={color}
        velocity={velocity}
        error={error.message}
      >
        Current Velocity value: {velocity}
      </SliderValueWrapper>
    </div>
  )
};
