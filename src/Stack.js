'use strict';

var Stack = function () {
	this._items = [];
};

Stack.prototype.isEmpty = function () {
	return this._items.length === 0;
};

module.exports = Stack;
