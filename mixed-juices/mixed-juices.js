// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {

/**
 * switch (name) {
  case 'Pure Strawberry Joy':
      return 0.5;
  break;
  case 'Energizer' || name == 'Green Garden':
      return 1.5;
  break;
  case 'Tropical Island':
      return 3;
  break;
  case 'All or Nothing':
      return 5;
  break;
  default:
    return 2.5;
    break;
}
 */


  if (name == 'Pure Strawberry Joy') return 0.5;
  if (name == 'Energizer' || name == 'Green Garden') return 1.5;
  if (name == 'Tropical Island') return 3;
  if (name == 'All or Nothing') return 5;
  return 2.5;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  
  let counter = 0;
  let index = 0;
  while (index < limes.length ) {
    if(wedgesNeeded == 0) return 0;
    if (limes[index] == 'small') counter +=6;
    if (limes[index] == 'medium') counter +=8;
    if (limes[index] == 'large') counter +=10;
    index++;
    if(counter >= wedgesNeeded) break;
  }
  return index;



}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let index = 0;
  while (orders.length != 0){
    orders.shift();
    timeLeft -= timeToMixJuice(orders[index]) 
    index++
    if(orders.length == 0 || timeLeft <= 0) break;
  }
  return orders;
}
