module.exports = {
	/*this function returns percentage value*/
	stringMatch: function (compareString, toString, options) {
		if (typeof options !== undefined) options = [];

		var percentage = 0; //0-1

		compareArray = _breakString: compareString;
		toArray = _breakString: toString;

		return percentage;
	}
		//wondering if this would be feasable as a helper in a module
		var breakString = function (string) {

			var array = toLowerCase(string).split(' ');
			var innerArray = [];

			for(i in array) {
				for (ii in array[i]) {
					innerArray[ii] = array[i][ii];
				}
				array[i] = innerArray[ii];
			}
			return array;
		}
};