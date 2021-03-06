const lib = require('../lib');

describe('absolute',() => {
    it('should return a positive number if input is positive',()=>{
        const result = lib.absolute(5);
        expect(result).toBe(5);
    });

    it('should return a positive number if input is negative',()=>{
        const result = lib.absolute(-5);
        expect(result).toBe(5);
    });

    it('should return 0 if input is 0',()=>{
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });
});

describe('greet',() => {
    it('should return a greeting message',()=>{
        const result = lib.greet('name');
        expect(result).toMatch(/name/);
        expect(result).toContain('name');
    });
});

describe('getCurrencies',() => {
    it('should return supported currencies',()=>{
        const result = lib.getCurrencies();
        expect(result).toContain('USD');

        expect(result).toEqual(expect.arrayContaining(['EUR','USD','AUD']));
    });
});


describe('getProduct',() => {
    it('should return the product with the given id',()=>{
        const result = lib.getProduct(1);
        //expect(result).toEqual({id: 1, price: 10});

       // expect(result).toMatchObject({id: 1, price: 10});

        expect(result).toHaveProperty('id', 1);
    });
});


describe('registerUser',() => {
    it('should throw if username is falsy',()=>{
        const args = [null, undefined, NaN, '', 0, false];
        args.forEach(a =>  {
            expect(() => { lib.registerUser(a) }).toThrow();
        });
    });

    it('should return a user object if valid username is passed',()=>{
        const result = lib.registerUser('mosh');
        expect(result).toMatchObject({ username: 'mosh'});
        expect(result.id).toBeGreaterThan(0);
    });

});