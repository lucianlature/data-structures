'use strict';

var Stack = require('../src/Stack'),
	expect = chai.expect,
	instance = null;

describe('Stack test', function () {

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

	describe('Stack push', function () {

		it('should insert new items into the stack', function () {

			var isEmpty = instance.isEmpty();
			expect(isEmpty).to.be.true;

			instance.push('foo');
			instance.push('bar');
			instance.push(7);
			instance.push(true);
			instance.push([]);
			instance.push({});
			instance.push(function(){});
			expect(instance.size()).to.equal(7);

		});

	});

	describe('Stack pop', function () {

		it('should remove the top item of the stack', function () {

			var isEmpty = instance.isEmpty(),
				removedItem;

			expect(isEmpty).to.be.true;

			instance.push('foo');
			instance.push('bar');
			var removedItem = instance.pop();

			expect(removedItem).to.equal('bar');
			expect(instance.size()).to.equal(1);

		});

	});

});
