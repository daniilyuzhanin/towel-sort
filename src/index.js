
// You should implement your task here.

module.exports = function towelSort (matrix) {
	let arr = [];
	if (matrix == null) {
		return arr;
	}
	if ((matrix.length == 0) || !matrix) {
		return arr;	
	}
	else {
		for (let i = 0; i < matrix.length; i++) {
			if ((i % 2) !== 0) {
			  matrix[i].sort(function (a, b) {
				 return b - a;
			  });
			}
			else matrix[i];
		 }
		 return matrix.join(',').split(',').map(i => i *= 1);
	  }
}