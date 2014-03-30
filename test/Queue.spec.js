'use strict';

var Queue = require('../src/Queue'),
	expect = chai.expect,
	instance = null;

describe('Queue test', function () {

	beforeEach(function (done) {
		instance = new Queue();
		done();
	});

	afterEach(function (done) {
		instance = null;
		done();
	});

	describe('Queue instantiation', function () {
		it('should be able to instantiate a new Queue', function () {
			expect(instance).to.be.an.instanceof(Queue);
		});
	});

	describe('Queue isEmpty', function () {
		it('should be true if the queue is empty', function () {
			var isEmpty = instance.isEmpty();
			expect(isEmpty).to.be.true;
		});

	});

});
