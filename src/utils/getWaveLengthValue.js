export default (velocity) => {
  const velocityNumber = Number(velocity);

  if (velocityNumber >= -100 && velocityNumber < 0) {
    return 440 + (100 + velocityNumber) / 2; // blue color scope
  } else if (velocityNumber > 0 && velocityNumber <= 100) {
    return 620 + velocityNumber / 2; // red color scope
  } else {
    return 0; // default scope
  };
};
