'use strict';

var Deque = require('../src/Deque'),
	expect = chai.expect,
	instance = null;

describe('Deque test', function () {

	beforeEach(function (done) {
		instance = new Deque();
		done();
	});

	afterEach(function (done) {
		instance = null;
		done();
	});

	describe('Deque instantiation', function () {
		it('should be able to instantiate a new deque', function () {
			expect(instance).to.be.an.instanceof(Deque);
		});
	});

	describe('Deque isEmpty', function () {
		it('should be true if the deque is empty', function () {
			var isEmpty = instance.isEmpty();
			expect(isEmpty).to.be.true;
		});
		it('should be false if the deque is not empty', function () {
			instance.addRear('foo');
			var isEmpty = instance.isEmpty();
			expect(isEmpty).to.be.false;
		});
	});

});
