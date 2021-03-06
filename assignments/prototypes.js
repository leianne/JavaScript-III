/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(attributes){
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function(){
  
  return 'Object was removed from the game.'
}

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(attributes) {
  this.healthPoints = attributes.healthPoints;
  this.name = attributes.name;
  GameObject.call(this, attributes);
}



CharacterStats.prototype = Object.create(GameObject.prototype)

CharacterStats.prototype.takeDamage = function() {
  
  return `${this.name} took damage.`
}
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
function Humanoid(attributes){
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
  CharacterStats.call(this, attributes);
}



Humanoid.prototype = Object.create(CharacterStats.prototype) 

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
}
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const drEvil = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 2,
    name: 'Dr. Evil',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
    weakness: 'Money'
  });

  const aquaMan = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 70,
    name: 'Aquaman',
    team: 'Ocean',
    weapons: [
      'Water',
      'SeaWeed',
    ],
    language: 'Dolphin',
    power: 'Xray Vision'
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  function Villain(attributes) {
    this.weakness = attributes.weakness;
    Humanoid.call(this, attributes);
  }

  function Hero(attributes) {
    this.power = attributes.power;
    Humanoid.call(this, attributes);

  }

  const spellPoints = [ {spell: 'Riddikulus', points: 5}, 
  {spell: 'Obliviate', points: 3}, 
  {spell: 'Sectumsempra', points: 7}, 
  {spell: 'Avada Kedavra', points: 2}, 
  {spell: 'Alohomora', points: 4}, 
  {spell: 'Lumos', points: 2}, 
  {spell: 'Expelliarmus', points: 1}, 
  {spell: 'Wingardium Leviosa', points: 1},
  {spell: 'Accio', points: 7},   
  {spell: 'Expecto Patronum', points: 2}              
];
  
  Hero.prototype.save = function(obj) {
    return obj.healthPoints 
  }
  Hero.prototype =Object.create(Humanoid.prototype)


  Villain.prototype.attack = function(spell, obj) {
    let val = 0;
    spellPoints.forEach(function(e){
      if(e.spell === spell){
         return val = e.points
      }
    })

    obj.healthPoints = obj.healthPoints - val
    console.log(val)
    return `${this.name} has cast the spell "${spell}" you have lost ${val} health points! ${obj.name} you now have  ${obj.healthPoints} health points!`;
    
  }

  Villain.prototype = Object.create(Humanoid.prototype) 



  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!