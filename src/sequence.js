const sequenceFactory = (initial, increment) => {
  let value = initial;

  const getNext = () => {
    const tempVal = value;
    value += increment;
    return tempVal;
  };

  return {
    getNext,
    increment,
  };
};

export default sequenceFactory;
