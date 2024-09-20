let chai;
before(async () => {
    chai = await import('chai');
});

const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber SUM', function() {
    it('should return 2 when adding 1.4 and 1.4', function() {
        const { expect } = chai;
        expect(calculateNumber('SUM', 1.4, 1.4)).to.equal(2);
    });

    it('should return 3 when adding 1.5 and 1.4', function() {
        const { expect } = chai;
        expect(calculateNumber('SUM', 1.5, 1.4)).to.equal(3);
    });

    it('should return 0 when adding 0.4 and 0.4', function() {
        const { expect } = chai;
        expect(calculateNumber('SUM', 0.4, 0.4)).to.equal(0);
    });

    it('should return -2 when adding -1.4 and -1.4', function() {
        const { expect } = chai;
        expect(calculateNumber('SUM', -1.4, -1.4)).to.equal(-2);
    });

    it('should return -2 when adding -1.5 and -1.4', function() {
        const { expect } = chai;
        expect(calculateNumber('SUM', -1.5, -1.4)).to.equal(-2);
    });

    it('should return 1000000002 when adding 1000000001.4 and 0.4', function() {
        const { expect } = chai;
        expect(calculateNumber('SUM', 1000000001.4, 0.4)).to.equal(1000000001);
    });

    it('should return -1000000000 when adding -1000000000.4 and -0.4', function() {
        const { expect } = chai;
        expect(calculateNumber('SUM', -1000000000.4, -0.4)).to.equal(-1000000000);
    });

    it('should return 0 when adding 0 and 0', function() {
        const { expect } = chai;
        expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
});

describe('calculateNumber SUBTRACT', function() {
    it('should return 0 when subtracting 1.4 and 1.4', function() {
        const { expect } = chai;
        expect(calculateNumber('SUBTRACT', 1.4, 1.4)).to.equal(0);
    });

    it('should return 2 when subtracting 1.5 and 0.4', function() {
        const { expect } = chai;
        expect(calculateNumber('SUBTRACT', 1.5, 0.4)).to.equal(2);
    });

    it('should return -1 when subtracting 0.4 and 1.4', function() {
        const { expect } = chai;
        expect(calculateNumber('SUBTRACT', 0.4, 1.4)).to.equal(-1);
    });

    it('should return 2 when subtracting -1.4 and -3.4', function() {
        const { expect } = chai;
        expect(calculateNumber('SUBTRACT', -1.4, -3.4)).to.equal(2);
    });
});

describe('calculateNumber DIVIDE', function() {
    it('should return 1 when dividing 1.4 by 1.4', function() {
        const { expect } = chai;
        expect(calculateNumber('DIVIDE', 1.4, 1.4)).to.equal(1);
    });

    it('should return 2 when dividing 2.4 by 1.4', function() {
        const { expect } = chai;
        expect(calculateNumber('DIVIDE', 2.4, 1.4)).to.equal(2);
    });

    it('should return "Error" when dividing 1.4 by 0', function() {
        const { expect } = chai;
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return -1 when dividing -1.4 by 1.4', function() {
        const { expect } = chai;
        expect(calculateNumber('DIVIDE', -1.4, 1.4)).to.equal(-1);
    });

    it('should return 0 when dividing 0 by 1.4', function() {
        const { expect } = chai;
        expect(calculateNumber('DIVIDE', 0, 1.4)).to.equal(0);
    });
});
