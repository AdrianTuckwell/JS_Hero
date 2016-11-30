var assert = require("assert");
var Rocket = require("../Rocket")

var rocket = new Rocket("NO2");

describe("Rocket",function(){
  it("should have a fuel type",function(){
    assert.equal("NO2", rocket.fuelType);
  });
})