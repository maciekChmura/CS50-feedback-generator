const pickRandomFromArray = array => {
  const length = array.length;
  const value = Math.floor(Math.random() * length);
  return array[value];
};

export default pickRandomFromArray;
