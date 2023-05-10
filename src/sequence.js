const DEFAULT_INITIAL = 1000;
const DEFAULT_INCREMENT = 1;

const sequenceFactory = (initVal, incrVal) => {
  let value = initVal || DEFAULT_INITIAL;
  const increment = incrVal || DEFAULT_INCREMENT;

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
