'use strict';

var __slice = [].slice;

module.exports = function () {
	var target = arguments[0],
		sources = __slice.call(arguments, 1),
		key,
		i,
		source;

	for (i = 0; i < sources.length; ++i) {
	    source = sources[i];
	    Object.keys(source).forEach(function (key) {
	    	target[key] = source[key];
	    });
	};
	return target;
};
