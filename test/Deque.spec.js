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

	describe('Deque addRear', function () {
		it('should add new items to the rear', function () {
			var isEmpty = instance.isEmpty();

			expect(isEmpty).to.be.true;
			instance.addRear('foo');
			instance.addRear('bar');
			expect(instance.size()).to.equal(2);
		});
	});

	describe('Deque removeRear', function () {
		it('should remove the front item from the deque', function () {
			var isEmpty = instance.isEmpty(),
				rear1, rear2;

			expect(isEmpty).to.be.true;

			instance.addRear('foo');
			instance.addRear('bar');
			expect(instance.size()).to.equal(2);
			rear1 = instance.removeRear();
			expect(rear1).to.equal('bar');
			rear2 = instance.removeRear();
			expect(rear2).to.equal('foo');
			expect(instance.isEmpty()).to.be.true;

		});
	});

	describe('Deque addFront', function () {
		it('should add new items to the front', function () {
			var isEmpty = instance.isEmpty();

			expect(isEmpty).to.be.true;
			instance.addFront('foo');
			instance.addFront('bar');
			expect(instance.size()).to.equal(2);
		});
	});

	describe('Deque removeRear', function () {
		it('should remove the front item from the deque', function () {
			var isEmpty = instance.isEmpty(),
				front1, front2;

			expect(isEmpty).to.be.true;

			instance.addRear('foo');
			instance.addFront('bar');
			instance.addRear(3);
			instance.addFront(4);
			expect(instance.size()).to.equal(4);
			front1 = instance.removeFront();
			expect(front1).to.equal(4);
			front2 = instance.removeFront();
			expect(front2).to.equal('bar');
			expect(instance.isEmpty()).to.be.false;
		});
	});

});
