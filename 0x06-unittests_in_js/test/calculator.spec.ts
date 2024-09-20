import { assert } from 'chai'
import Calculator from '../src/calculator'

describe('Test Calculator Class', ()=>{
	it('should return sum', ()=> {
		const calc = new Calculator();
		const result = calc.add(2, 3);
		assert.equal(result, 5)
	});
});
