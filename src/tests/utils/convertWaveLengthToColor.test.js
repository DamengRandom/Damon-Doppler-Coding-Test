import convertWaveLengthToColor from '../../utils/convertWaveLengthToColor';

describe('Test convertWaveLengthToColor function', () => {
  test('should render blue color when velocity value is less equal than 490 and large equal than 440', () => {
    const velocity = -100;
    const color = convertWaveLengthToColor(velocity);
    expect(color).toBe('rgba(0%, 0%, 100%, 1)'); // blue color
  });

  test('should render red color when velocity value is less equal than 700 and large equal than 620', () => {
    const velocity = 100;
    const color = convertWaveLengthToColor(velocity);
    expect(color).toBe('rgba(100%, 0%, 0%, 1)'); // red color
  });

  test('should render white color when velocity value is 0', () => {
    const velocity = 0;
    const color = convertWaveLengthToColor(velocity);
    expect(color).toBe('rgba(100%, 100%, 100%, 1)'); // white
  });
});
