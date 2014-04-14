'use strict';

var List = require('../src/List'),
	expect = chai.expect,
	instance = null;

describe('List test', function () {

	beforeEach(function (done) {
		instance = new List();
		done();
	});

	afterEach(function (done) {
		instance = null;
		done();
	});

	describe('List instantiation', function () {
		it('should be able to instantiate a new list', function () {
			expect(instance).to.be.an.instanceof(List);
		});
	});
});
