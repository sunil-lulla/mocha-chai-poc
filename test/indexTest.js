const chai = require('chai'); 
const assert = chai.assert;


chai.config.showDiff = true; 
const index = require("../index");

describe('index.js file test',function() {
	it('mochaTest should return hello',function() {
		let result = index.mochaTest();
		assert.equal(result, "hello");
	})

	it('mochaTest should String type',function() {
		let result = index.mochaTest();
		assert.equal(typeof result, "string");
	})

	it('addNumbers should number type',function() {
		let result = index.addNumbers(5,5);
		assert.equal(typeof result, "number");
	})

	it('addNumbers should sum of numbers',function() {
		let n1=5;
		let n2=5;
		let result = index.addNumbers(n1,n2);
		assert.equal(result, n1-n2);
	})

	it('addNumbers should be greater than atleast one number',function() {
		let n1=5;
		let n2=5;
		let result = index.addNumbers(n1,n2);
		assert.isAtLeast(result, n1);
	})

})