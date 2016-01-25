var assert = require('assert');

describe('my feature', function() {
    it('will do something', function(done) {
        browser
            .url('/')
            .getTitle()
            .then(function(title) {
                assert.equal(title, 'DEMO APP')
            })
            .call(done);
    });
});
