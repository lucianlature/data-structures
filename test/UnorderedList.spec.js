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
});
