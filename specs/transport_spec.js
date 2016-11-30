var Transport = require('../Transport');
var assert = require('assert');
var Hero = require('../Hero');

var spaceship = new Transport("Spaceship", 10000, "rocket");

//-----------------------------------------------------------
describe('Hero', function(){
//-----------------------------------------------------------
 it('should have name', 
  function(){
    assert.equal("Spaceship", spaceship.name);
  });

//-----------------------------------------------------------
 it('should have max speed', 
  function(){
    assert.equal(10000, spaceship.maxSpeed);
  });

//-----------------------------------------------------------
 it('should have propulsion', 
  function(){
    assert.equal("rocket", spaceship.propulsion);
  });

 });

