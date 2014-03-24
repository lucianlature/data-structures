'use strict';

var Stack = require('../src/Stack'),
	fs = require('fs'),
	sassSource = '_carousel.scss';

function balanceChecker (fileSource) {

	var stack = new Stack(),
		balanced = true,
		index = 0;

	while (index < fileSource.length && balanced) {
		var token = fileSource[index],
			top;

		if (token === '{') {
			stack.push(token);
		} else {
			if (stack.isEmpty()) {
				balanced = false;
			} else {
				top = stack.pop();
				if (!matches(top, token)) {
					balanced = false;
				}
			}
		}
		index += 1;
	}

	if (balanced && stack.isEmpty()) {
		return true;
	}

	return false;
}

function matches (open, close) {
	console.log(open, close);
	return (open && close && true);
}

fs.readFile(sassSource, 'utf8', function (err,data) {
	if (err) {
		return console.log(err);
	}
	console.log(balanceChecker(data));
});
