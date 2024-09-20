const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber SUM', function() {
    it('should return 2 when adding 1.4 and 1.4', function() {
        assert.strictEqual(calculateNumber('SUM', 1.4, 1.4), 2);
    });

    it('should return 3 when adding 1.5 and 1.4', function() {
        assert.strictEqual(calculateNumber('SUM', 1.5, 1.4), 3);
    });

    it('should return 0 when adding 0.4 and 0.4', function() {
        assert.strictEqual(calculateNumber('SUM', 0.4, 0.4), 0);
    });

    it('should return -2 when adding -1.4 and -1.4', function() {
        assert.strictEqual(calculateNumber('SUM', -1.4, -1.4), -2);
    });

    it('should return -2 when adding -1.5 and -1.4', function() {
        assert.strictEqual(calculateNumber('SUM', -1.5, -1.4), -2);
    });

    it('should return 1000000002 when adding 1000000001.4 and 0.4', function() {
        assert.strictEqual(calculateNumber('SUM', 1000000001.4, 0.4), 1000000001);
    });

    it('should return -1000000001 when adding -1000000000.4 and -0.4', function() {
        assert.strictEqual(calculateNumber('SUM', -1000000000.4, -0.4), -1000000000);
    });

    it('should return 0 when adding 0 and 0', function() {
        assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });

});


describe('calculateNumber SUBTRACT', function() {
    it('should return 0 when subtracting 1.4 and 1.4', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 1.4), 0);
    });

    it('should return 2 when subtracting 1.5 and 0.4', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 0.4), 2);
    });

    it('should return -1 when subtracting 0.4 and 1.4', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 0.4, 1.4), -1);
    });

    it('should return 2 when subtracting -1.4 and -3.4', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -3.4), 2);
    });
});

describe('calculateNumber DIVIDE', function() {
    it('should return 1 when dividing 1.4 by 1.4', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 1.4), 1);
    });

    it('should return 2 when dividing 2.4 by 1.4', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 2.4, 1.4), 2);
    });

    it('should return "Error" when dividing 1.4 by 0', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return -1 when dividing -1.4 by 1.4', function() {
        assert.strictEqual(calculateNumber('DIVIDE', -1.4, 1.4), -1);
    });

    it('should return 0 when dividing 0 by 1.4', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 0, 1.4), 0);
    });

});
