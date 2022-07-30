
// defined a function that will take 2 values; a and b and they will be of type number; then we add a type annotation for the value that the function will return
const add = (a: number,b:number): number => {
return a + b;
}
// if we forget to return a value and just leave it like a-b an annotation will help us figure out why, in this case it was because we were not using a return
const subtract = (a:number, b:number) :number=>{
    return a-b;
}

function divide(a:number,b:number): number{

return a/b;
}

// anonymous function assigned to a variable.
const multiply = function(a:number, b:number): number{
    return a *b;
}

// void doesnt return anything, returns console.log or undefined/null
const logger = (message:string):void =>{
    console.log(message);
}
// throw error and exit function early w.o returning value, expect to never return
const throwError = (message: string):never => {
    if(!message){
    throw new Error(message)}

    return message;
} 

const forecast = {
    date: new Date(),
    weather: 'sunny'
}

// destructuring
// const logWeather =({weather,date}: {date: Date, weather: string}): void =>{
//     console.log(forecast.date)
//     console.log(forecast.weather)
// }
const logWeather =(forecast: {date: Date, weather: string}): void =>{
    console.log(forecast.date)
    console.log(forecast.weather)
}
logWeather(forecast)