//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (rows) => {
	var result = [];
  	for (var i = 0; i < rows; ++i) {
  		var temp_arr = [];
  		if (i == 0) {
  			temp_arr = [1];
  			result.push(temp_arr);
  			continue;
  		}
  		temp_arr.push(1);
		for (var j = 1; j < i; ++j) {
			temp_arr.push(result[i-1][j-1] + result[i-1][j]);
		}
		temp_arr.push(1);
		result.push(temp_arr);
  	}
  	return result;
};
