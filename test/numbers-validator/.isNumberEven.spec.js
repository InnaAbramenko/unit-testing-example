import {NumbersValidator} from '../../app/numbers_validator';
import {expect} from 'chai';

describe('isNumberEven positive tests', () => {
    let validator;
    beforeEach( () => {
        validator = new NumbersValidator;
    })
    
    it('should return true when provided with an even number', () => {
        const validationResults = validator.isNumberEven(4);
        expect(validationResults).to.be.equal(true);

    });
})