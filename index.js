var assert = require('assert');
var _ = require('lodash');

var current;
var expected;

describe('lodash tests', function(){
	describe('array functions',function(){
		it('chunk-1', function(){
			current = _.chunk([1,2,3,4,5],2);
			expected = [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ];
			assert.equal(JSON.stringify(current), JSON.stringify(expected));
		});
		it('chunk-2', function(){
			current = _.chunk([1,2,3,4,5],1);
			expected = [[1],[2],[3],[4],[5]];
			assert.equal(JSON.stringify(current), JSON.stringify(expected));
		});
		it('chunk-3', function(){
			current = _.chunk([1,2,3,4,5],5);
			expected = [[1,2,3,4,5]];
			assert.equal(JSON.stringify(current), JSON.stringify(expected));
		});
		it('compact-1', function(){
			current = _.compact([1,2,3,4,5,null,0,NaN,undefined,""]);
			expected = [1,2,3,4,5];
			assert.equal(JSON.stringify(current), JSON.stringify(expected));
		});
		it('compact-2', function(){
			current = _.compact([null,0,NaN,undefined,""]);
			expected = [];
			assert.equal(JSON.stringify(current), JSON.stringify(expected));
		});
		it('compact-3', function(){
			current = _.compact([["",0,null],null,0,NaN,undefined,""]);
			expected = [["",0,null]];
			assert.equal(JSON.stringify(current), JSON.stringify(expected));
		});
		it('', function(){
		});
	});
});