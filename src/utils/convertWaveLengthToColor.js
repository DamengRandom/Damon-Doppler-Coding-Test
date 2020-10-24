import getWaveLengthValue from './getWaveLengthValue';

export default (velocity) => {
  let Red,
    Green,
    Blue,
    colorSpace,
    wl = getWaveLengthValue(velocity);

    if (wl >= 440 && wl <= 490) {
      Red = 0;
      Green = (wl - 440) / (490 - 440);
      Blue = 1;  
    } else if (wl >= 620 && wl <= 670) {
      Red = 1;
      Green = -1 * (wl - 670) / (670 - 620);
      Blue = 0;
    } else {
      Red = 1;
      Green = 1;
      Blue = 1;
    };

    colorSpace = `rgba(${(Red * 100)}%, ${(Green * 100)}%, ${(Blue * 100)}%, 1)`;

    return colorSpace;
};
