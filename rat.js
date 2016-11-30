var Rat =function(name){
  this.name = name;
  this.contaminate = function(food)
  {
    food.poisonous = true;
  };
};
  module.exports = Rat;