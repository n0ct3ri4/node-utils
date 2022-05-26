// create a loop that will send a promise when finished looping
module.exports = function loop(array, callback) {
  return new Promise((resolve) => {
    // loop through the array
    array.forEach((element, index) => {
      // if the array is fully lopped, resolve the promise
      if (index === array.length - 1) {
        resolve();
      } else {
        // call the callback with the element
        callback(element);
      }
    });
  });
};
