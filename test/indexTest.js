const assert = require('chai').assert;
const index = require("../index");

describe('index File test',function() {
	it('index.js should return hello',function() {
		assert.equal(index(), "hello");
	})
})