const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber SUM', function() {
    it('should return 2 when adding 1.4 and 1.4', function() {
        expect(calculateNumber('SUM', 1.4, 1.4)).to.equal(2);
    });

    it('should return 3 when adding 1.5 and 1.4', function() {
        expect(calculateNumber('SUM', 1.5, 1.4)).to.equal(3);
    });

    it('should return 0 when adding 0.4 and 0.4', function() {
        expect(calculateNumber('SUM', 0.4, 0.4)).to.equal(0);
    });

    it('should return -2 when adding -1.4 and -1.4', function() {
        expect(calculateNumber('SUM', -1.4, -1.4)).to.equal(-2);
    });

    it('should return 1000000002 when adding 1000000001.4 and 0.4', function() {
        expect(calculateNumber('SUM', 1000000001.4, 0.4)).to.equal(1000000002);
    });
});

describe('calculateNumber SUBTRACT', function() {
    it('should return 0 when subtracting 1.4 and 1.4', function() {
        expect(calculateNumber('SUBTRACT', 1.4, 1.4)).to.equal(0);
    });

    it('should return 1 when subtracting 1.5 and 0.4', function() {
        expect(calculateNumber('SUBTRACT', 1.5, 0.4)).to.equal(1);
    });

    it('should return -1 when subtracting 0.4 and 1.4', function() {
        expect(calculateNumber('SUBTRACT', 0.4, 1.4)).to.equal(-1);
    });
});

describe('calculateNumber DIVIDE', function() {
    it('should return 1 when dividing 1.4 by 1.4', function() {
        expect(calculateNumber('DIVIDE', 1.4, 1.4)).to.equal(1);
    });

    it('should return "Error" when dividing by 0', function() {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return -1 when dividing -1.4 by 1.4', function() {
        expect(calculateNumber('DIVIDE', -1.4, 1.4)).to.equal(-1);
    });
});
