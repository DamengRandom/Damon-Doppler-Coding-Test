import React from 'react';
import '../../App.css';
// utils
import inputValidator from '../../utils/inputValidator';
import convertWaveLengthToColor from '../../utils/convertWaveLengthToColor';
// components
import Image from '../atoms/Image';
import Input from '../atoms/Input';
import Slider from '../atoms/Slider';
import Message from '../atoms/Message';
// constants
import { velocityLabel, hintMessage } from '../../constants';

export default function Dashboard() {
  const [velocity, setVelocity] = React.useState(0);
  const [color, setColor] = React.useState('white');
  const [error, setError] = React.useState({
    status: false,
    message: ''
  });

  const handleVelocityNumberChange = value => {
    setColor('white'); // Only trigger color change when user clicks 'Enter',
    // otherwise, just set color to default color which is white
    setVelocity(value);
    // validator
    inputValidator(value, setError);
  };

  const setDefaultColor = value => {
    if(value === '0') {
      setColor('white');
    }
  }

  const handleSliderValueChange = value => {
    setVelocity(value);
    setDefaultColor(value);
    setColor(convertWaveLengthToColor(velocity));
  };

  const handleOnKeyPress = () => {
    setColor(convertWaveLengthToColor(velocity));
    // validator
    inputValidator(velocity, setError);
  };

  const handleOnMouseLeave = value => {
    setDefaultColor(value);
  };

  return (
    <div>
      <Image
        imgUrl="./star-small.png"
        altText="star"
        color={color}
        velocity={velocity}
        error={error.message}
      />
      <div className="flex-center">
        <Input
          labelText={velocityLabel}
          id="velocityValue"
          type="text"
          placeholder="Enter number"
          value={velocity}
          handleChange={
            e => handleVelocityNumberChange(e.target.value)
          }
          handlePress={handleOnKeyPress}
        />
        <Slider
          id={"velocitySlider"}
          type={"range"}
          min={-100}
          max={100}
          step={1}
          handleChange={
            e => handleSliderValueChange(e.target.value)
          }
          value={velocity}
          mouseEvent={
            e => handleOnMouseLeave(e.target.value)
          }
          color={color}
          velocity={velocity}
          error={error}
        />
      </div>
      <div>
        {error.status && <Message message={error.message} />}
        <Message classname="message" message={<i>{hintMessage}</i>} />
      </div>
    </div>
  )
};
