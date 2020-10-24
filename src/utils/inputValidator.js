export default (value, setError) => {
  // eslint-disable-next-line no-useless-escape
  var numberRegex = /^\-?\d+((\.|\,)\d+)?$/;

  setError({
    status: false,
    message: ''
  });

  if(!value.match(numberRegex)) {
    setError({
      status: true,
      message: 'Please enter a valid number typed value.'
    });
  };

  if (Number(value) < -100 || Number(value) > 100) {
    setError({
      status: true,
      message: 'Please enter the number typed value between -100 and 100.'
    });
  };
};
