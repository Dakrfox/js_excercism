//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const gigasecond = (date1) => {
  var time1 = date1.getTime();
  var date2 = new Date(time1 + 1000000000000);
return date2;
}