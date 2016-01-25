var assert = require('assert');

/**
 * Dummy test in Mocha-BDD syntax
 */
xdescribe('My feature', function() {
    it('should do something', function(done) {
        var result = true;
        assert(true, result);
        done();
    });
});

/**
 * Place your tests inside this describe() suite
 */
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
