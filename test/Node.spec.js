'use strict';

var Node = require('../src/Node'),
	expect = chai.expect,
	instance = null;

describe('Node test', function () {

	beforeEach(function (done) {
		instance = new Node();
		done();
	});

	afterEach(function (done) {
		instance = null;
		done();
	});

	describe('Node instantiation', function () {
		it('should be able to instantiate a new node', function () {
			expect(instance).to.be.an.instanceof(node);
		});
	});
});
