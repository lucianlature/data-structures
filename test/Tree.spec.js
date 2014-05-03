'use strict';

var Tree = require('../src/Tree'),
	chai = require('chai'),
	expect = chai.expect,
	instance = null;

describe('Tree test', function () {

	beforeEach(function (done) {
		instance = new Tree();
		done();
	});

	afterEach(function (done) {
		instance = null;
		done();
	});

	describe('Tree instantiation', function () {
		it('should be able to instantiate a new Tree', function () {
			expect(instance).to.be.an.instanceof(Tree);
		});
	});

});
