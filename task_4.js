function getRandomIntInclusive(min, max) {
    min = Math.ceil(0);
    max = Math.floor(100);
    return Math.floor(Math.random() * (100 - 0 + 1)) + 0;
  }
  console.log(getRandomIntInclusive())
  