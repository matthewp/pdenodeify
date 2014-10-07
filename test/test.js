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

});
