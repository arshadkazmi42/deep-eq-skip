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

  // If data is empty and expectedData is not empty then throw an error
  if (isDataEmpty(data) && !isDataEmpty(expectedData)) {
    throw new Error(`Expected ${JSON.stringify(expectedData)} found ${JSON.stringify(data)}`);
  }

  // If expectedData is empty and data is not empty then throw an error
  if (!isDataEmpty(data) && isDataEmpty(expectedData)) {
    throw new Error(`Expected ${JSON.stringify(expectedData)} found ${JSON.stringify(data)}`);
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

const isDataEmpty = function(data) {
  if(
    Array.isArray(data) && !data.length ||
    isObj(data) && !Object.getOwnPropertyNames(data).length
  ) {
    return true;
  }
  return false;
};

module.exports = deepEqSkip;
