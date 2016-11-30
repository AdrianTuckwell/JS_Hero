var Hero = function(name, health, faveFood, saying)
{
    this.name = name;
    this.health = health;
    this.faveFood = faveFood;
    this.saying = saying;
}

Hero.prototype = {
  eat: function(food) { 
    if (food.poisonous){
      this.health -= 10;
      return;
    }

    if(this.faveFood === food.name){
      this.health += (10*1.5);
    }

    else{
      this.health += 10};
    }
}


module.exports = Hero;