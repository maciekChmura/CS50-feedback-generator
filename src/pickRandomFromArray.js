const pickRandomFromArray = array => {
  const value = Math.floor(Math.random() * array.length);
  return array[value];
};

export default pickRandomFromArray;
