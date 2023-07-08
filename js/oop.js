const output = document.getElementById('output');
const output2 = document.getElementById('output2');

/* STEP 1a: Create a new object using a regular function */
function createNewPerson(name) {
    var obj = {};
    obj.name = name;
    obj.greeting = function () {
        alert(`Hi, I am ${name}`);
    }
    return obj;
}

/* STEP 1b: Use the console to create a new person, and 
then invoke the function represented by .greeting() */
var person1 = createNewPerson("P1");
var person2 = createNewPerson("P2");

/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - 
rewrite the above function, without returning anything. Capitalize the name of the function. */
// function Person(name) {
//     this.name = name;
//     this.greeting = function () {
//         alert(`Hi, I am ${name}`);
//     }
// }

/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword, 
and again invoking the .greeting() method for each person */
// var p1 = new Person("Jon");
// var p2 = new Person("Jack");

/* STEP 3a: Build the complete constructor for the object Person (comment out the above function first).
 Include name (first and last), age, gender, interests, bio (function), and greeting (function). */
function Person(firstname, lastname, age, gender, interests) {
    this.name = {
        "firstname": firstname,
        "lastname": lastname
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.greeting = function () {
        alert(`Hi, I am ${this.name}`);
    };
    this.bio = function () {
        return `The interests of ${this.name.firstname} ${this.name.lastname}, of age ${this.age} living at 
        are ${this.interests}.`;
    }
}

/* STEP 3b: Instantiate a new Person based on the above constructor */
var p1 = new Person("Abc", "Xyz", 12, "Male", ["programming", "swimming"]);
var p2 = new Person("Abc2", "Xyz2", 100, "Female", ["swimming", "gaming"]);

/* STEP 3c: Attempt to access the various properties of person1 using the console. */
// person1['age']
// person1.interests[1]
// person1.bio()

/* STEP 4a: Alternatively, you can use the Object() constructor to create an object. eg. car*/
var car = new Object();

/* STEP 4b: Once 'car' is created, add various properties and methods… */
car.brand = "Honda";
car.color = "Green";
car.price = 50;
car.fun = function () {
    return `The car description is: ${car.brand}, ${car.color}, ${car.price}.`;
}

/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.fun() function */
car.price = 100;

/* STEP 5a: Yet another approach is to use the create() method. 
Let's see how the above car object can be used to create another object */
var anotherCar = Object.create(car);

/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */
console.log(anotherCar.brand);

// That's it! Now on to Lab 8...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
function Hamburger(bunType, garnishes, cheeseType, specialtySauce, meatType, pattyCount, extraToppings) {
    this.bunType = bunType;
    this.garnishes = garnishes;
    this.cheeseType = cheeseType;
    this.specialtySauce = specialtySauce;
    this.meatType = meatType;
    this.pattyCount = pattyCount;
    this.extraToppings = extraToppings;
  
    this.burgerInfo = function() {
      return `The burger consists of ${this.bunType} bun garnished with ${this.garnishes}, and a cheese type of ${this.cheeseType} with ${this.specialtySauce}. The meat type is ${this.meatType} with ${this.pattyCount} patty/patties, and the burger has ${this.extraToppings} for extra toppings. Enjoy!`;
    };
  }
  
  var myBurger = new Hamburger("sesameSeed", ["lettuce", "tomato", "onion"], "cheddar", "special sauce", "beef", "1", ["pickles", "hot peppers"]);
  console.log(myBurger.burgerInfo());


  output2.textContent = myBurger.burgerInfo(); 

  
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS