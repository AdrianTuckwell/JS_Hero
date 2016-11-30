var Food = require('../Food');
var assert = require('assert');

var food = new Food("Horse", 10);


  describe('Food', function(){
   it('should have name', 
    function(){
      assert.equal("Horse", food.name);
    });

   it('should have repValue', 
    function(){
      assert.equal(10, food.repValue);
    });

  });