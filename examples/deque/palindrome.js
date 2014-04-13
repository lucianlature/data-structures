'use strict';

var Deque = require('../../src/Deque');

function palindromeChecker (str) {

	var deque = new Deque(),
		isPalindrome = true,
		l = str.length,
		i = 0,
		first, last;

	for (; i < l; i++) {
		deque.addRear(str[i]);
	}

	while (deque.size() > 1 && isPalindrome) {
		first = deque.removeFront();
		last = deque.removeRear();

		if (first !== last) {
			isPalindrome = false;
		}
	}
	return isPalindrome;
}

console.log(palindromeChecker("wassamassaw"));
console.log(palindromeChecker("dennis sinned"));
console.log(palindromeChecker("rewarder and redrawer"));
