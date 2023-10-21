import {add} from "./map.js";

console.log(add(5,5));



const num = [1,8,1,5,9,8];

function myFunction(cb){
    let newArray = [];
    for(let nums of num){
        if(!cb(nums)){
            newArray.push(nums);
        }
    }
    return newArray
}

function cb(num){
    return num % 2; 
}

console.log(myFunction(cb));