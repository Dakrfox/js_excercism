// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
export function translate2d(dx, dy) {
  return (x1, y1) => { return [dx + x1, dy +y1];}
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
  return (x1, y1) => { return [sx * x1, sy *y1];}
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {
  //como retorna una funcion esta requiere parametros  para la funcion g necesita x,y y y la funcion f tambien los necesita
  //pero como el resultado de la funcion x es un array de dos valores el resultado de este puede servir como argumentos para
  //la funcion g sin embargo, no podemos pasar un array asi que usamos el spread separator (...)
  //dentro de las pruebas se crea una const x = funcion(2,2) por ejemplo y ahora x = a la funcion que retorna y para llegar a la 
  //funcion de adentro se usa x(3,4) el cual si rtetornaria el array [5,6]
  return (x, y) => g(...f(x, y));
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */

export function memoizeTransform(f) {
  let rev_x, rev_y,rev_result;
  return (x,y)=> {
      if(rev_x===x && rev_y===y)return rev_result;
      rev_x = x;
      rev_y = y;
      return rev_result =f(x,y)
  }
  
  
}
