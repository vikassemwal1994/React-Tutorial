console.log('\n');
console.log("Hello world!");


//1. example of template literals (with back ticks)
const weight = 50;
const message = `my weight after dieting is ${weight-10}`;
console.log("Topic 1 :"+message);


//2. example of false values in condition --
//Falsy values= ("", false, undefined, null, 0)
const username = '';
if(username){
    console.log("Topic 2 :"+"You are an adult")
}else{
    console.log("Topic 2 :"+"You are a minor")
}


//3. Example of ternary operator
const token = "wrtweryweryweyxvncxn342525"
const user = token ? true : false
console.log("Topic 3 :"+user)


//4. Short circuiting with or
const name = "vikas"
const usrname = name || "user"
console.log("Topic 4 :"+usrname)


// Short circuiting with and
const email = true
const roll = undefined
const calculate = email && roll
console.log("Topic 4 :"+calculate) 


//5. non primitive data type
const person = {
    name: "ramesh",
    age: 20
}
console.log("Topic 5 :"+ person.name)

console.log('\n');