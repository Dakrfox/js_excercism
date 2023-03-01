//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = x => {
  let RNA = x.split('');
  for (let i = 0; i < RNA.length; i++) {
    switch (x[i]) {
      case "G":
        RNA[i] = "C";
        break;
      case "C":
        RNA[i] = "G";
        break;
      case "T":
        RNA[i] = "A";
        break;
      case "A":
        RNA[i] = "U";
        break;
      default:
        RNA[i] = "";
    }
  }
  return RNA.join('');
};