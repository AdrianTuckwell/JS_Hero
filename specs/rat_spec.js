var Rat = require('../Rat');
var Food = require('../Food');
var assert = require('assert');

var rat = new Rat("Just a Rat");
var food = new Food("Horse", 10);

describe('Rat', function(){
 it('should have name', 
  function(){
    assert.equal("Just a Rat", rat.name);
  });

 it('should make food poisonous', 
  function(){
    rat.contaminate(food);
    assert.equal(true, food.poisonous);
  });
});