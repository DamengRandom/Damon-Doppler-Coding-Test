import getWaveLengthValue from '../../utils/getWaveLengthValue';

describe('Test getWaveLengthValue function', () => {
  test('should return blue color scope value when the velocity is less than 0 and larger or equal to -100', () => {
    const blueScopeVelocity = -80;
    const blueColorWaveLengthValue = getWaveLengthValue(blueScopeVelocity);
    expect(blueColorWaveLengthValue).toBe(450);
  });

  test('should return red color scope value when the velocity is less than 0 and larger or equal to -100', () => {
    const redScopeVelocity = 80;
    const redColorWaveLengthValue = getWaveLengthValue(redScopeVelocity);
    expect(redColorWaveLengthValue).toBe(660);
  });

  test('should return default color scope value when the velocity is 0', () => {
    const defaultScopeVelocity = 0;
    const defaultColorWaveLengthValue = getWaveLengthValue(defaultScopeVelocity);
    expect(defaultColorWaveLengthValue).toBe(0);
  });
});
