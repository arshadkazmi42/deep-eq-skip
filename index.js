const isObj = require('is-obj');


const deepEqSkip = function (data, expectedData, skipKeys = []) {

  // Validate data type of both the data
  if (typeof (data) !== typeof (expectedData)) {
    throw new Error(`Expected ${JSON.stringify(expectedData)} found ${JSON.stringify(data)}`);
  }

  // If data is not an object/array then match the values
  if (!isObj(data)) {
    if (data !== expectedData) {
      throw new Error(`Expected ${JSON.stringify(expectedData)} found ${JSON.stringify(data)}`);
    }

    return true;
  }

  // If data is empty and expectedData is not empty then throw an error
  if (isDataEmpty(data) && !isDataEmpty(expectedData)) {
    throw new Error(`Expected ${JSON.stringify(expectedData)} found ${JSON.stringify(data)}`);
  }

  // If expectedData is empty and data is not empty then throw an error
  if (!isDataEmpty(data) && isDataEmpty(expectedData)) {
    throw new Error(`Expected ${JSON.stringify(expectedData)} found ${JSON.stringify(data)}`);
  }

  Object.getOwnPropertyNames(data).forEach(function (key) {
    if (skipKeys.indexOf(key) !== -1) {
      return;
    }

    deepEqSkip(data[key], expectedData[key], skipKeys);
  });

  return true;
};

const isDataEmpty = function (data) {
  if (
    Array.isArray(data) && !data.length ||
    isObj(data) && !Object.getOwnPropertyNames(data).length
  ) {
    return true;
  }
  return false;
};

module.exports = deepEqSkip;
