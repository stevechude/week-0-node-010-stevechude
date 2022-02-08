/**
 * Laundry Problem
 *
 * @param {number} noOfWashes
 * @param {number[]} cleanPile
 * @param {number[]} dirtyPile
 * @returns {number}
 */
 function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
     //declare 2 variables (a maxCount & an empty array to hold values).
    let countPair = 0;  
    let singlePair = [];
    //sort through clean & dirty piles in ascending order...
    cleanPile = cleanPile.sort((a, b) => {
      return a - b;
    })
    dirtyPile = dirtyPile.sort((a, b) => {
      return a - b;
    });
    //loop through cleanPile to find pairs & splice 'em out.
    for (let i = 0; i < cleanPile.length; i++) {
      if (cleanPile[i] === cleanPile[i + 1]) {
        countPair++
        cleanPile.splice(i, 1)
      }
      else {
        singlePair.push(cleanPile[i]);
      }
    }
    //loop through the newArray of singlePair
    //check if any dirtyPile sock is similar to it & splice it out.
    //reduce noOfWashes if that's d case.
    for (let j = 0; j < singlePair.length; j++) {
      if (dirtyPile.includes(singlePair[j]) && noOfWashes > 0) {
        dirtyPile.splice(j, 1);
        countPair++
        noOfWashes--
      }
    }
    //after the 2 previous operations, loop through whats left in d dirtyPIle.
    //if there's a match, splice it out & also reduce d noOfWashes..
    for (let k = 0; k < dirtyPile.length; k++) {
      if (dirtyPile[k] === dirtyPile[k + 1] && noOfWashes > 1) {
        countPair++
        noOfWashes -= 2
        dirtyPile.splice(k, 1);
      }
    }
    return countPair;
  }
  
  module.exports = getMaxPairs;