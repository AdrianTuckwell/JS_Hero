var Hero = require('../Hero');
var assert = require('assert');


var hero = new Hero("Buzz Light Year", 100, "Horse", "To infinity and beyond!");


describe('Hero', function(){
 it('should have name', 
  function(){
    assert.equal("Buzz Light Year", hero.name);
  });

 it('should have health', 
  function(){
    assert.equal(100, hero.health);
  });

 it('should have favoirite food', 
  function(){
    assert.equal("Horse", hero.faveFood);
  });

 it('should have saying', 
  function(){
    assert.equal("To infinity and beyond!", hero.saying);
  });









});