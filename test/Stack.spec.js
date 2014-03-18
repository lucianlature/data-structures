var Stack = require('../src/Stack'),
  expect = chai.expect;

describe('Stack test', function() {

  it('should be able to use my Stack module', function() {
    if (Stack.echo() !==  'test') {
      throw new Error('echo method should return test');
    }
  });

});
