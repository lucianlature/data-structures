'use strict';

var List = require('../src/UnorderedList'),
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

});
