'use strict';

var UnorderedList = require('./UnorderedList'),
	extend = require('../lib/extend');

function TreeList () {}

extend(TreeList.prototype, UnorderedList.prototype, {
	// do nothing yet
});

module.exports = TreeList;
