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
			removedItem = instance.pop();
			expect(removedItem).to.equal('bar');

			instance.push(4);
			removedItem = instance.pop();
			expect(removedItem).to.equal(4);

			expect(instance.size()).to.equal(1);

		});
	});

	describe('Stack size', function () {
		it('should return the correct size of the stack', function () {
			var isEmpty = instance.isEmpty(),
				size;

			expect(isEmpty).to.be.true;

			instance.push('foo');
			instance.push('bar');
			instance.push(7);

			size = instance.size();
			while (instance.pop()) {
				expect(instance.size()).to.equal(--size);
			}

			['foo', 'bar', 1, 3].forEach(function (item) {
				instance.push(item);
				expect(instance.size()).to.equal(++size);
			});

		});
	});

	describe('Stack peek', function() {
		it('should return the top item on the stack', function () {

			var isEmpty = instance.isEmpty();
			expect(isEmpty).to.be.true;

			instance.push('foo');
			instance.push('bar');
			instance.push(7);

			expect(instance.peek()).to.equal(7);
			instance.pop();
			expect(instance.peek()).to.equal('bar');
			instance.pop();
			expect(instance.peek()).to.equal('foo');
			instance.pop(); // the stack should be empty by now
			expect(instance.peek()).to.be.null;
		});

		it('doesn\'t modify the stack', function() {
			var peek, size;
			instance.push('foo');
			instance.push('bar');
			instance.push(7);

			size = instance.size();
			peek = instance.peek();
			expect(instance.size()).to.equal(size);
		});
	});


});
