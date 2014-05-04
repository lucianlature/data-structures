'use strict';

var TreeList = require('../src/TreeList'),
    chai = require('chai'),
    expect = chai.expect,
    instance = null;

describe('TreeList test', function () {

    beforeEach(function (done) {
        instance = new TreeList();
        done();
    });

    afterEach(function (done) {
        instance = null;
        done();
    });

    describe('TreeList instantiation', function () {
        it('should be able to instantiate a new tree list', function () {
            expect(instance).to.be.an.instanceof(TreeList);
        });
    });

});
