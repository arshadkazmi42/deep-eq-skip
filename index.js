const isObj = require('is-obj');


const deepEqSkip = function(data, expectedData, skipKeys = []) {

  // Validate data type of both the data
  if (typeof(data) !== typeof(expectedData)) {
    return false;
  }

  // If data is not an object/array then match the values
  if (!isObj(data)) {
    return (data === expectedData);
  }
  
  // Validate whole object recursively
  try {
    for (let key in data) {
      if (skipKeys.indexOf(key) === -1) {
        if (!deepEqSkip(data[key], expectedData[key], skipKeys)) {
          return false;
        }
      }
    }
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};


module.exports = deepEqSkip;
