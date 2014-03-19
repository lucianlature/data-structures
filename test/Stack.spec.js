'use strict';

var Stack = require('../src/Stack'),
	expect = chai.expect;

describe('Stack test', function() {

	it('should be able to instantiate a new Stack', function() {
		var instance = new Stack();
		expect(instance).to.be.an.instanceof(Stack);
	});

});
