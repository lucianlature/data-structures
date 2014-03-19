'use strict';

var Stack = require('../src/Stack'),
	expect = chai.expect;

describe('Stack test', function () {

	var instance = null;

	beforeEach(function (done) {
		instance = new Stack();
		done();
	});

	afterEach(function (done) {
		instance = null;
		done();
	});

	describe('Stack instantiation', function () {
		it('should be able to instantiate a new Stack', function () {
			expect(instance).to.be.an.instanceof(Stack);
		});
	});

	describe('Stack isEmpty', function () {
		it('should be true if the stack is empty', function () {
			var isEmpty = instance.isEmpty();
			expect(isEmpty).to.be.true;
		});

		it('should be false if the stack is not empty', function () {
			instance.push('foo');
			var isEmpty = instance.isEmpty();
			expect(isEmpty).to.be.false;
		});

	});

});
