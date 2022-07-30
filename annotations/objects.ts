const profile = {
    name: 'alex', 
    age:20,
    coords: {
        lat:0,
        lng:15
    },
    setAge(age: number): void {
this.age = age;
    }
}

    // destructuring
//  annotation is diff here compared to the rest, we have to write out expected stucture of profile; a structure that is an object with a prop of a number
//  we have to double up on the structure because if we want to pass it a string and a number then it wouldnt be possible.
    const {age, name}:{age:number; name:string} = profile;
// we can ignore the name error thing here
    const {coords: {lat,lng}}: {coords: {lat:number; lng:number}} = profile;