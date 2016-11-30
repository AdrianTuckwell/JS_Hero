var Hero = require('../Hero');
var Food = require('../Food');
var Rat = require("../Rat");


var assert = require('assert');


var hero = new Hero("Buzz Light Year", 100, "Horse", "To infinity and beyond!");
var horse = new Food("Horse", 10);
var tapas = new Food("Tapas", 10);
var rat = new Rat("Rodent");

describe('Hero', function(){

  // beforeEach(function(){
  //   hero.health = 100;
  // });


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


 it('should be able to eat food', 
  function(){
    hero.eat(tapas);
    assert.equal(110, hero.health);
  });

 it('should be able to eat favorite food', 
  function(){
    hero.health = 100;
    hero.eat(horse);
    assert.equal(115, hero.health);
  });

 it('should be able to get sick', 
  function(){
    hero.health = 100;
    rat.contaminate(horse);
    hero.eat(horse);
    assert.equal(90, hero.health);
  });





});