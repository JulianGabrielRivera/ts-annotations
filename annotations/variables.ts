const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch:null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();
// type of array of strings
let colors: string[] = ['red','green','blue'];
let myNumbers: number[] = [1,2,3]
let truths: boolean[] = [true,true,false]

// classes
class Car{

}
let car: Car = new Car()

// Object literal
// indicating that we are assigning these props; we can only ever assign an object to point that has x prop thats a number and y prop
let point: {x: number;y:number} = {

    x:10,
    y:20
}

// function
// just to indicate we are getting a number
// everything up to void is an annotation
// its like a comment that we are going to tell typescript what type of value we are going to do
const logNumber: (i: number)=> void = (i:number) => {
console.log(i)
}
// when to use annotations
//  1) function thqt returns the "any" type
const json = '{"x": 10, "y": 20}';
// typescript has no idea what json.parse will return
const coordinates = JSON.parse(json)
console.log('coordinates')

// one way to fix the any type is to write an annotation
const coordinates2: {x:number; y:number} = JSON.parse(json)
console.log(coordinates2)

// when we declare a variable on one line then initialize it later.
// we need to add a type annotation to foundWord of boolean;
let words = ['red','green', 'blue'];
let foundWord: boolean;

for(let i =0; i<words.length;i++){
    if(words[i] === 'green'){
        foundWord = true;
    }
}

// variable whos type cannot be inferred correctly

let numbers = [-10,-1,-12];
// we need annotation if were going to change from boolean to number cause then it will throw an err
let numberAboveZero: boolean | number= false;

for(let i =0; i<numbers.length; i++){
    if(numbers[i] >0){
        numberAboveZero = numbers[i]
    }
}

