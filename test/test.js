var assert = require('assert');
var denodeify = require('../');

describe('Basics', function() {

  it('works', function(done) {
    var readFile = denodeify(require('fs').readFile);

    readFile(__dirname + '/../package.json').then(function(txt) {
      var data = JSON.parse(txt);
      assert.equal(data.name, 'pdenodeify');
    }).then(done);
  });

  it('handles errors correctly', function(done) {
    var readFile = denodeify(require('fs').readFile);

    readFile(__dirname + '/fakefile.txt').then(function() {
      assert.fail(true, false, 'Should not have gotten here');
    }, function(err) {
      assert(err instanceof Error, 'An error received')
    }).then(done);
  });

});
