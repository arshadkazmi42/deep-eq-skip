const isObj = require('is-obj');


const deepEqSkip = (data, expectedData, skipKeys) => {
  if (!isObj(data)) {
    return (data === expectedData);
  }

  for (let key in data) {
    if (skipKeys.indexOf(key) === -1) {
      if (!deepEqSkip(data[key], expectedData[key], skipKeys)) {
        return false;
      }
    }
  }
  
  return true;
};


module.exports = deepEqSkip;
