'use strict';

var List = require('../src/UnorderedList'),
	chai = require('chai'),
	expect = chai.expect,
	instance = null;

describe('UnorederedList test', function () {

	beforeEach(function (done) {
		instance = new List();
		done();
	});

	afterEach(function (done) {
		instance = null;
		done();
	});

	describe('UnorderedList instantiation', function () {
		it('should be able to instantiate a new unordered list', function () {
			expect(instance).to.be.an.instanceof(List);
		});
	});

	describe('UnorderedList isEmpty', function () {
		it('should return true when it does not have a head', function () {
			expect(instance.isEmpty()).to.be.true;
		});
	});

	describe('UnorderedList size', function () {
		it('should return 0 when first instantiated', function () {
			expect(instance.size()).to.equal(0);
		});
		it('should return the correct size when items are being added', function () {
			instance.add('foo');
			expect(instance.size()).to.equal(1);
			instance.add('bar');
			expect(instance.size()).to.equal(2);
		});
	});

	describe('UnorderedList add', function () {
		it('should add new items to the list', function () {
			[3, 5, 8, 13, 21].forEach(function (item, index) {
				instance.add(item);
				expect(instance.size()).to.equal(index + 1);
			});
		});
	});

	describe('UnorderedList search', function () {
		it('should add new items to the list', function () {
			[3, 5, 8, 13, 21].forEach(function (item) {
				instance.add(item);
			});
			expect(instance.search(3)).to.be.true;
			expect(instance.search(5)).to.be.true;
			expect(instance.search(8)).to.be.true;
			expect(instance.search(13)).to.be.true;
			expect(instance.search(21)).to.be.true;
			expect(instance.search(0)).to.be.false;
		});
	});

	describe('UnorderedList remove', function () {
		it('should add new items to the list', function () {
			[3, 5, 8, 13, 21].forEach(function (item) {
				instance.add(item);
			});
			instance.remove(3);
			expect(instance.size()).to.equal(4);
			expect(instance.search(3)).to.be.false;
			instance.remove(21);
			expect(instance.size()).to.equal(3);
			expect(instance.search(21)).to.be.false;
			instance.remove(8);
			expect(instance.size()).to.equal(2);
			expect(instance.search(8)).to.be.false;
			expect(instance.search(5)).to.be.true;
			expect(instance.search(13)).to.be.true;
		});
	});

	describe('UnorderedList append', function () {
		it('should add new items to the list', function () {
			[3, 5, 8, 13, 21].forEach(function (item, index) {
				instance.append(item);
				expect(instance.size()).to.equal(index + 1);
			});
		});
	});

	describe('UnorderedList indexOf', function () {
		it('should return the correct position of the item in the list', function () {
			[3, 5, 8, 13, 21].forEach(function (item) {
				instance.add(item);
			});
			expect(instance.indexOf(3)).to.equal(4);
			expect(instance.indexOf(5)).to.equal(3);
			expect(instance.indexOf(8)).to.equal(2);
			expect(instance.indexOf(13)).to.equal(1);
			expect(instance.indexOf(21)).to.equal(0);
			expect(instance.indexOf(1)).to.equal(-1);
		});
	});

	describe('UnorderedList insert', function () {
		it('should insert the item at the correct position in the list', function () {
			[3, 5, 8, 13, 21].forEach(function (item) {
				instance.add(item);
			});
			instance.insert(2, 7);
			expect(instance.indexOf(7)).to.equal(2);
			expect(instance.indexOf(8)).to.equal(3);
		});
	});

	describe('UnorderedList pop', function () {
		it('should remove the last item of the list if position not provided', function () {
			var item;
			instance.add(3);
			instance.add(5);
			instance.add(8);
			item = instance.pop();
			expect(item.getData()).to.equal(3);
			item = instance.pop();
			expect(item.getData()).to.equal(5);
			item = instance.pop();
			expect(item.getData()).to.equal(8);
			expect(instance.isEmpty()).to.be.true;
		});
		it('should remove the item of the list at the provided position', function () {
			var item;
			instance.add(3);
			instance.add(5);
			instance.add(8);
			item = instance.pop(1);
			expect(item.getData()).to.equal(5);
			item = instance.pop(0);
			expect(item.getData()).to.equal(8);
			instance.pop();
			expect(instance.isEmpty()).to.be.true;
		});
	});

});
