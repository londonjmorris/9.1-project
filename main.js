//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (hungry) {
  this.status = 'normal';
  this.hungry = hungry;
  this.owner = undefined;
}

Dog.prototype.color = function(color){
  this.color = color;
};


// Instances of Dog
// Needed: sadie, moonshine, atticus
var sadie = new Dog(false);
var moonshine = new Dog(true);
var atticus = new Dog();

sadie.color('black');


//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
  this.cool = cool;
}


Human.prototype.pet = function(Dog) {
  Dog.status = 'happy';
};

Human.prototype.feed = function(Dog) {
  Dog.hungry = false;
};
// Instances of Human
// Needed: mason, julia
var mason = new Human(false);
var julia = new Human(true);
