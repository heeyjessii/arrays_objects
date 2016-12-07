
//variables
//ARRAYS
var number = [1,2,3,4,5,6,7,8,9,10];
var names = ["SENOR Tan", "Zakattak", "Yolo Baggins", "Ohai"];
var colors = ["light black", "ron burgandy", "highlighter"];
var adj = ["smart", "special case", "yummy", "tiny whiny", "ferocious"];
var slang = ["scrap", "kobe beef", "da kine", "li 'dat", "pau hana"];


//OBJECTS
var treat = {
  toppings : ["sprinkles", "chocolate frosting","o;hare air"],
  fillings : "jelly",
  shape : "circle",
  count : 12,
  tasty : true
};



function addition (number){
    console.log(number[5] + number[3]);
  }


addition(number[i]);


function amazing(donut) {
  if (donut.tasty == true) {
    console.log("My " + donut.fillings + " donut has " + donut.toppings[0] + " on top");
  }
  else {
    console.log("This donut has " + donut.toppings[1] + " and it's " + donut.shape + "shape");
  }
}

amazing(treat);