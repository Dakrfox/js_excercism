// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  //0 ->(radix parameter) GP
  return parseInt(array1.join(""), 0) + parseInt(array2.join(""), 0);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  return (value.toString().split('').reverse().join('') == value.toString())?true:false;
  
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  /*let result = input??  'Required field'; return result;
  result =  (!isNaN(input) && parseInt(input)>0)?'':'Must be a number besides 0';
  return result;*/
  return !input? 'Required field': (!isNaN(input) && parseInt(input)>0)?'':'Must be a number besides 0';
}
