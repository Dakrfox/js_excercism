//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (two_colors) => {
  const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ];

  const indice_uno = COLORS.indexOf(two_colors[0]);
  const indice_dos = COLORS.indexOf(two_colors[1]);
  return +`${indice_uno}${indice_dos}`;
};

